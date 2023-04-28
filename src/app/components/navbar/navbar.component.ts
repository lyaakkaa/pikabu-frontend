import {Component, HostListener, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ICategory} from "../../models/models";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isScrolled = false;
  showHeader = false;
  categories: ICategory[]

  ngOnInit(): void {
    this.getCategories();
  }

  constructor(private categoryService: CategoryService) {
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    this.isScrolled = scrollPosition > 50;
  }

  @HostListener('window:mousemove', ['$event'])
  onWindowMouseMove(event: MouseEvent) {
    this.showHeader = event.clientY <= 50;
  }





}
