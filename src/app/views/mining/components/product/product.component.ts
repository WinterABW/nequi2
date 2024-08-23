import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  @Output() modalOpened = new EventEmitter<void>();
  @Input() product: any;

  ngOnInit() {
  }

  openModal() {
    this.modalOpened.emit(this.product);
  }
}
