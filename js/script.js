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
  output.innerHTML+=`nome:${componente.firstName}<br> ruolo:${componente.role}<br> foto:${componente.photo}<br>`
}