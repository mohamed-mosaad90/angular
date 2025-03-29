import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
interface dataMap {
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  images: string[];

}
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dataList: dataMap[] =
    [
      {
        "title": "Woman Shawl",
        "slug": "woman-shawl",
        "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
        "quantity": 225,
        "price": 191,
        "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg",
        "images": [
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg"
        ]
      },
      {
        "title": "Woman Shawl",
        "slug": "woman-shawl",
        "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
        "quantity": 220,
        "price": 149,
        "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg",
        "images": [
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403266805-1.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-3.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403266806-2.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403266807-4.jpeg"
        ]
      },
      {
        "title": "Woman Shawl",
        "slug": "woman-shawl",
        "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
        "quantity": 220,
        "price": 149,
        "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg",
        "images": [
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg"
        ]
      },
      {
        "title": "Woman Shawl",
        "slug": "woman-shawl",
        "description": "Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen",
        "quantity": 220,
        "price": 149,
        "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg",
        "images": [
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402838330-1.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-3.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-4.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402838331-2.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402838332-5.jpeg"
        ]
      },
      {
        "title": "Woman Shawl",
        "slug": "woman-shawl",
        "description": "Material\tPolyester Blend\nColour Name\tBeige\nDepartment\tWomen",
        "quantity": 228,
        "price": 349,
        "imageCover": "https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg",
        "images": [
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-2.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402563676-3.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-4.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402563675-1.jpeg",
          "https://ecommerce.routemisr.com/Route-Academy-products/1680402563677-5.jpeg"
        ]
      }
    ]

  detailsDtata: dataMap = {} as dataMap;
  text: string = '';
  eventMethod(e: any): void {
  }
}