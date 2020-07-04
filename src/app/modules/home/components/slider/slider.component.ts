import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  news: any[] = [
    {
      title: 'Black Widow new release date',
      img: 'assets/img/bwfinal.webp',
      desc:
        'The start of phase 4 of Marvel will come this year. ‘Black Widow’, the Marvel movie starring Scarlett Johansson, will usher in a new stage in superhero movies. This production will arrive before the end of the year',
    },
    {
      title: 'Relaunch of X-Factor in April',
      img: 'assets/img/X-Factor.webp',
      desc:
        'This April will bring us the hands of Leah Williams and David Baldeón the relaunch of X-Factor in a new series to show us a group in charge of investigating the mutant deaths.',
    },
    {
      title:
        'Its official. Comic-Con 2020 will be online for the first time for free for everyone',
      img: 'assets/img/1366_2000.jpg',
      desc:
        'Issue number 50 was a significant number for Comic Con San Diego but was canceled due to the coronavirus. But now, according to the comicbook page, Comic-Con International has revealed that it will now be held in the form of a free digital convention. An online event that will be held between July 22 and 26, and will be accessible worldwide.',
    },
  ];
  constructor(private_config: NgbCarouselConfig) {}

  ngOnInit(): void {}
}
