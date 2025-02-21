// Importando os módulos necessários
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Criando uma instância do Express
const app = express();

// Configurando o middleware para parse de JSON
app.use(bodyParser.json());

// Configurando o CORS para permitir requisições de diferentes origens
app.use(cors());

// Dados simulados (pode ser substituído por conexão com banco de dados real)
let videos = [
  {
    "id": 1,
    "title": "O que faz uma desenvolvedora front-end?",
    "cover": "https://i.ytimg.com/vi/ZY3-MFxVdEw/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/ZY3-MFxVdEw?si=62CEQY-ymQlxzCwV",
    "area": "FrontEnd",
    "description": "O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa nesse episódio! "
  },
  {
    "id": 2,
    "title": "Guia de carreira Front-end",
    "cover": "https://i.ytimg.com/vi/NpJVZtgSY4U/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/NpJVZtgSY4U?si=Xte6wAAKqUqe7AtT",
    "area": "FrontEnd",
    "description": "Guia de carreira Front-end | #HipstersPontoTube"
  },
  {
    "id": 3,
    "title": "Aprenda a transformar design em código com o Figma",
    "cover": "https://i.ytimg.com/vi/sup2hlWm5yE/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/sup2hlWm5yE?si=YwRwZGp3pxUILWLj",
    "area": "FrontEnd",
    "description": "Aprenda a transformar design em código com o Figma #AluraMais"
  },
  {
    "id": 4,
    "title": "O que faz uma desenvolvedora Back-end?",
    "cover": "https://i.ytimg.com/vi/fiPfvylj6rk/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/fiPfvylj6rk?si=X71UdPvRTTl-w-qF",
    "area": "BackEnd",
    "description": "O que faz uma desenvolvedora Back-end? com Juliana Amoasei | #HipstersPontoTube"
  },
  {
    "id": 5,
    "title": "JavaScript para back-end",
    "cover": "https://i.ytimg.com/vi/live/uyRDbGZG92E/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/live/uyRDbGZG92E?si=2vMP0Gll8HEX6gJY",
    "area": "BackEnd",
    "description": "JavaScript para back-end | Hipsters.Talks"
  },
  {
    "id": 6,
    "title": "Kotlin, Micronaut e Back-end com Alberto Sousa",
    "cover": "https://i.ytimg.com/vi/PV9FoHvVE8k/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/PV9FoHvVE8k?si=MfA4jRFO-1ZWrtMB",
    "area": "BackEnd",
    "description": "Kotlin, Micronaut e Back-end com Alberto Sousa | #HipstersPontoTube"
  },
  {
    "id": 7,
    "title": "Desenvolvimento Android",
    "cover": "https://i.ytimg.com/vi/fWscDFHKgw8/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/fWscDFHKgw8?si=zJUun-GqcueVk2XW",
    "area": "Mobile",
    "description": "Um episódio focado no desenvolvimento de aplicações Android. Neste bate-papo, Paulo Silveira e Felipe Torres conversam sobre os primeiros passos para começar a desenvolver, quais as principais ferramentas do desenvolvimento mobile, como colocar sua aplicação no ar e mais!"
  },
  {
    "id": 8,
    "title": "Híbridos: Flutter e React Native",
    "cover": "https://i.ytimg.com/vi/vf9P_PycgRw/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/vf9P_PycgRw?si=HliNXIqZXGQZA-7F",
    "area": "Mobile",
    "description": "Desmistificando Mobile - Ep #4"
  },
  {
    "id": 9,
    "title": "Como começar sua primeira app com o Flutter - Hello World",
    "cover": "https://i.ytimg.com/vi/xSC8j3gl7xM/maxresdefault.jpg",
    "link": "https://www.youtube.com/embed/xSC8j3gl7xM?si=-VeYvOZaBhMeF_OC",
    "area": "Mobile",
    "description": "Como começar sua primeira app com o Flutter - Hello World | #AluraMais"
  }
];

let categories = [
  {
    "id": 1,
    "area": "FrontEnd",
    "color": "#6BD1FF"
  },
  {
    "id": 2,
    "area": "BackEnd",
    "color": "#00C86F"
  },
  {
    "id": 3,
    "area": "Mobile",
    "color": "#FFBA05"
  }
];

// Rotas
app.get('/videos', (req, res) => {
  res.json(videos);
});

app.get('/categories', (req, res) => {
  res.json(categories);
});

app.post('/videos', (req, res) => {
  const newVideo = req.body;
  videos.push(newVideo);
  res.status(201).json(newVideo);
});

app.post('/categories', (req, res) => {
  const newCategory = req.body;
  categories.push(newCategory);
  res.status(201).json(newCategory);
});

// Configuração para ouvir na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
