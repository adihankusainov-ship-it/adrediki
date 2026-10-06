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
