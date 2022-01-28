import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  isTrue = 'T';
  isFalse = 'F';
  selectedCheckbox: any[] = [];
  selectedRadio: any = [];
  categoriesCheckbox: any[] = [
    { name: 'A', key: '1' },
    { name: 'B', key: '2' },
    { name: 'C', key: '3' },
    { name: 'D', key: '4' },
  ];
  // Phần radiobutton
  city: string;
  ngOnInit() {
    // this.selectedCategories = this.categories.slice(1, 3);
    // this.selectedRadio = this.categoriesCheckbox[0];
  }
  handleSubmit() {
    alert('You just submit!');
  }
  // Chức năng ẩn button Submit khi chưa kích hoạt bất kỳ radio button hoặc checkbox
  handleCheckbox() {
    // Radio button
    for (let i = 0; i < this.categoriesCheckbox.length; i++) {
      if (this.selectedRadio.name === this.categoriesCheckbox[i].name) {
        this.categoriesCheckbox[i].newKeyRadio = this.isTrue;
      } else {
        this.categoriesCheckbox[i].newKeyRadio = this.isFalse;
      }
    }
    // Checkbox

    // Xử lý trường hợp selectedCheckbox là một mảng rỗng
    if (this.selectedCheckbox.length === 0) {
      for (let j = 0; j < this.categoriesCheckbox.length; j++) {
        this.categoriesCheckbox[j].newKeyCheckbox = this.isFalse;
      }
      // Sau khi selectedCheckbox đã có value
    } else {
      for (let i = 0; i < this.selectedCheckbox.length; i++) {
        for (let j = 0; j < this.categoriesCheckbox.length; j++) {
          if (
            this.selectedCheckbox[i].name === this.categoriesCheckbox[j].name
          ) {
            this.categoriesCheckbox[j].newKeyCheckbox = this.isTrue;
          } else if (
            this.selectedCheckbox[i].name !== this.categoriesCheckbox[j].name &&
            this.categoriesCheckbox[j].newKeyCheckbox !== this.isTrue
          ) {
            this.categoriesCheckbox[j].newKeyCheckbox = this.isFalse;
          }
        }
      }
    }
    console.log(this.categoriesCheckbox);
  }
}
