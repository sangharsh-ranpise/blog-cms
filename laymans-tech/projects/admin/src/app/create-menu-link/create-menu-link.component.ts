import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-create-menu-link',
  templateUrl: './create-menu-link.component.html',
  styleUrls: ['./create-menu-link.component.css']
})
export class CreateMenuLinkComponent implements OnInit {
  menuLinkFormGroup: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
    this.menuLinkForm();
  }

  menuLinkForm() {
    this.menuLinkFormGroup = this.fb.group({
      linkName: ['', Validators.required]
    })
  }
  createMenuLink() {
    console.log(this.linkName);
    let menuLink = {
      navBarName: this.linkName
    }
    this.adminService.createMenuLink(menuLink).subscribe(res => {
      console.log(res)
      this.router.navigate(['list', 'blogs'])
    })
  }

  get linkName() {
    return this.menuLinkFormGroup.get('linkName').value;
  }
}
