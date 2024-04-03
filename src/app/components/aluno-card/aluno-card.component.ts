import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-card',
  templateUrl: './aluno-card.component.html',
  styleUrls: ['./aluno-card.component.scss']
})
export class AlunoCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  avatar = "https://imgs.search.brave.com/ko4Bd8wGKBvGfTdCDnc8kSkRY-xSVtd3lQ5sY1jlqR8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MzUzOTMxNi9wdC9m/b3RvL29uZS1iZWF1/dGlmdWwtd29tYW4t/bG9va2luZy1hdC10/aGUtY2FtZXJhLWlu/LXByb2ZpbGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWVG/U25lVFEwOUNHeFdO/ckRqRHN6RW9MbjhT/NFVZdFNCZUtCd3Bw/U1A1YVE9"
  username = "Joao vila"
  email = "Joaozinho@email.com"
}
