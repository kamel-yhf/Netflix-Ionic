import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.page.html",
  styleUrls: ["./movie.page.scss"],
})
export class MoviePage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}
