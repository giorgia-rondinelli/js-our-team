const output= document.getElementById('output')

const team=[
  {
    firstName:'Wayne Barnett',
    role:'Founder & CEO',
    photo:'img/wayne-barnett-founder-ceo.jpg'

  },
  {
    firstName:'Angela Caroll',
    role:'Chief Editor',
    photo:'img/angela-caroll-chief-editor.jpg'

  },
  {
    firstName:'Walter Gordon',
    role:'Office Manager',
    photo:'img/walter-gordon-office-manager.jpg'

  },
  {
    firstName:'Angela Lopez',
    role:'Social Media Manager',
    photo:'img/angela-lopez-social-media-manager.jpg'

  },
  {
    firstName:'Scott Estrada',
    role:'Developer',
    photo:'img/scott-estrada-developer.jpg'

  },
  {
    firstName:'Barbara Ramos',
    role:'Graphic Designer',
    photo:'img/barbara-ramos-graphic-designer.jpg'

  }
]

for(let componente of team){
  console.log(componente)
  output.innerHTML+=` <div class="col d-flex  justify-content-center">
  <div class="card mt-3 " style="width: 18rem;">
    <img src="${componente.photo}" class="card-img-top" alt="...">
    <div class="card-body  ">
      <p class="card-text text-center fw-bold  ">${componente.firstName}</p>
      <p class="card-text text-center">${componente.role}</p>
      
    </div>
  </div>
</div>
`
}