const artists = [
  {
    id: 'kishlak',
    name: 'Кишлак',
    title: '11:11',
    description:
      'Кишла́к (настоящее имя — Макси́м Серге́евич Фисе́нко; род. 14 декабря 1998, Североморск) — российский музыкант.До проекта «Кишлак» Фисенко успел создать и закрыть много других проектов: «Автостопом по фазе сна», «Bisexual From The Village», «Солнечный Муслим», «Русалочье урочище», «писък» и другие малоизвестные',
    image:
      'https://i.pinimg.com/736x/dc/31/3d/dc313d867538a32b693d0af292995c78.jpg',
    genre: 'Хип-Хоп / альтернативный рэп',
    era: 'ДОРОГУ МОЛОДЫМ!',
    mood: 'мрачный · агрессивный · атмосферный',
    tracks: ['Эскапист', 'Я диско шар', 'Гнев']
  },
  {
    id: 'madk1d',
    name: 'Madk1d',
    title: 'КАЗАКИ',
    description:
      'Серков Марк Робертович (родился 11 апреля 2002 года в Томске) — российский музыкальный исполнитель. Карьеру музыканта начал в 2020 году, первую аудиторию обрёл после фита с LILCAK3 на треке «КАТЮХА».',
    image:
      'https://i.pinimg.com/736x/ff/d5/54/ffd5548b110847207d9c493c697c6151.jpg',
    genre: 'Рэп / клубный бит',
    era: 'SEXYSWAG',
    mood: 'добряк · дерзкий · быстрый',
    tracks: ['так похуй', 'ДИНАСТИЯ', '8 миля']
  },
  {
    id: 'dark-prince',
    name: 'Тёмный принц',
    title: 'DANGER',
    description:
      'Тёмный принц — это образ тишины и силы, в котором звук становится властным. Его музыка завораживает плотной атмосферой и глубокой внутренней линией.',
    image:
      'https://i.pinimg.com/736x/1b/f6/94/1bf6948ff8d71fc5d691eb3a58fb36d3.jpg',
    genre: 'Тёмный хип-хоп / мрачная атмосфера',
    era: 'MILITANTUM',
    mood: 'тёмный · атмосферный · мощный',
    tracks: ['Отвратительный король', 'предиктор', 'одной из']
  },
  {
    id: 'villian',
    name: 'Villian',
    title: 'забавно)',
    description:
      'Зелинский Андрей Андреевич — российский рэп-исполнитель из Москвы. Всё детство и юношество провёл в Волгограде, а в 2026 году вернулся обратно в столицу. Начал заниматься музыкой в 2023 году. Участник объединения ​ALIVE.',
    image:
      'https://i.pinimg.com/736x/db/d7/c4/dbd7c4d3337c65d112283e8021a10be3.jpg',
    genre: 'Рэп / тёмная энергия',
    era: 'ALIVE',
    mood: 'жесткий · мрачный · мощный',
    tracks: ['ДИНАСТИЯ', 'Случайно наступил на шприц', '8 миля']
  },
  {
    id: 'cupsize',
    name: 'Cupsize',
    title: 'ЗМП',
    description:
        'Гаражная инди-группа с элементами лоуфай-блюза и панка из города Ярославль.',
    image:
      'https://i.pinimg.com/736x/e0/4a/8f/e04a8f871eb3cee0d9308a06b0cad7b7.jpg',
    genre: 'Современный рэп / эмоциональный стиль',
    era: '2020 — настоящее время',
    mood: 'эмоциональный · насыщенный · стильный',
    tracks: ['детская травма', 'целую тебя', 'кислород']
  },
 {
    id: 'cupsize',
    name: 'Cupsize',
    title: 'ЗМП',
    description:
        'Гаражная инди-группа с элементами лоуфай-блюза и панка из города Ярославль.',
    image:
      'https://i.pinimg.com/736x/e0/4a/8f/e04a8f871eb3cee0d9308a06b0cad7b7.jpg',
    genre: 'Современный рэп / эмоциональный стиль',
    era: '2020 — настоящее время',
    mood: 'эмоциональный · насыщенный · стильный',
    tracks: ['детская травма', 'целую тебя', 'кислород']
  },
  {
    id: 'fortuna-812',
    name: 'FORTUNA 812',
    title: 'Энергия магии',
    description:
      'FORTUNA 812 — российская рок-группа с мистическим звучанием и энергичным стилем.',
    image:
      'https://i.pinimg.com/736x/placeholder1.jpg',
    genre: 'Рок / электроник',
    era: 'современность',
    mood: 'энергичный · мистический · дерзкий',
    tracks: ['Трек 1', 'Трек 2', 'Трек 3']
  },
  {
    id: 'zokha',
    name: 'ЗоХа',
    title: 'Лирическая душа',
    description:
      'ЗоХа — исполнительница с уникальным голосом и лирическим стилем.',
    image:
      'https://i.pinimg.com/736x/placeholder2.jpg',
    genre: 'Инди-поп / эмо',
    era: '2019 — настоящее',
    mood: 'лирический · чувственный · ранимый',
    tracks: ['Песня 1', 'Песня 2', 'Песня 3']
  },
  {
    id: 'valentin-strykalo',
    name: 'Валентин Стрыкало',
    title: 'Душа музыки',
    description:
      'Валентин Стрыкало — украинский музыкант с глубоким и аутентичным звуком.',
    image:
      'https://i.pinimg.com/736x/placeholder3.jpg',
    genre: 'Фолк / альтернатива',
    era: '2015 — настоящее',
    mood: 'глубокий · аутентичный · философский',
    tracks: ['Композиция 1', 'Композиция 2', 'Композиция 3']
  },
  {
    id: '2hollis',
    name: '2hollis',
    title: 'Цифровой звук',
    description:
      '2hollis — электронный музыкант с инновационным подходом к музыке.',
    image:
      'https://i.pinimg.com/736x/placeholder4.jpg',
    genre: 'Электроника / синтпоп',
    era: '2018 — настоящее',
    mood: 'футуристический · креативный · экспериментальный',
    tracks: ['Track A', 'Track B', 'Track C']
  },
  {
    id: 'the-beatles',
    name: 'The Beatles',
    title: 'Легенды рока',
    description:
      'The Beatles — британская рок-группа, которая перевернула историю музыки.',
    image:
      'https://i.pinimg.com/736x/placeholder5.jpg',
    genre: 'Рок / поп',
    era: '1960 — 1970',
    mood: '革新的 · мелодичный · вневременной',
    tracks: ['Hey Jude', 'Let It Be', 'Yesterday']
  },
  {
    id: 'korolevskiy-xvii',
    name: 'Королевский XVII',
    title: 'Волшебство звука',
    description:
      'Королевский XVII — загадочный проект с королевским и магическим стилем.',
    image:
      'https://i.pinimg.com/736x/placeholder6.jpg',
    genre: 'Готика / синтпоп',
    era: '2020 — настоящее',
    mood: 'магический · величественный · таинственный',
    tracks: ['Королевский танец', 'Тайна ночи', 'Зовите меня']
  }
];

function renderArtistCards() {
  const grid = document.getElementById('artistGrid');
  if (!grid) return;

  grid.innerHTML = artists
    .map(
      (artist) => `
        <a class="artist-card" href="artist.html?artist=${artist.id}" aria-label="Открыть страницу ${artist.name}">
          <img src="${artist.image}" alt="${artist.name}" />
          <div class="artist-card-content">
            <h3>${artist.name}</h3>
            <p>${artist.title}</p>
          </div>
        </a>
      `
    )
    .join('');
}

function renderArtistPage() {
  const bodyPage = document.body.dataset.page;
  if (bodyPage !== 'artist') return;

  const params = new URLSearchParams(window.location.search);
  const artistId = params.get('artist');
  const artist = artists.find((item) => item.id === artistId) || artists[0];

  const nameEl = document.getElementById('artistName');
  const titleEl = document.getElementById('artistTitle');
  const descEl = document.getElementById('artistDescription');
  const imageEl = document.getElementById('artistImage');
  const genreEl = document.getElementById('artistGenre');
  const eraEl = document.getElementById('artistEra');
  const moodEl = document.getElementById('artistMood');
  const tracksEl = document.getElementById('artistTracks');

  if (!nameEl || !titleEl || !descEl || !imageEl || !genreEl || !eraEl || !moodEl || !tracksEl) return;

  nameEl.textContent = artist.name;
  titleEl.textContent = artist.title;
  descEl.textContent = artist.description;
  imageEl.src = artist.image;
  imageEl.alt = artist.name;
  genreEl.textContent = artist.genre;
  eraEl.textContent = artist.era;
  moodEl.textContent = artist.mood;
  tracksEl.innerHTML = artist.tracks.map((track) => `<li>${track}</li>`).join('');
}

renderArtistCards();
renderArtistPage();
