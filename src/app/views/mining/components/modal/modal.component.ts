import { NgClass } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'], // Corrigió 'styleUrl' a 'styleUrls'
})
export class ModalComponent implements OnInit {
  isSmallScreen: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();
  modalAnimationClass: string = 'fadeInUp'; // Inicialmente se establece la animación de entrada
  @Input() product : any

  ngOnInit() {
    console.log(this.product);
    this.checkScreenHeight();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenHeight();
  }

  checkScreenHeight() {
    const viewportHeight = window.innerHeight;
    this.isSmallScreen = viewportHeight < 640;
  }

  closeModal() {
    this.modalAnimationClass = 'fadeOutDown';
    setTimeout(() => {
      this.modalClosed.emit();
    }, 1000);
  }


  
}
