import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  section: string = 'account';
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.section = params['section'];
    })
  }
  getArray(size: number) {
    return new Array(size);
  }
}
