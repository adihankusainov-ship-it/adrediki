const artists = [
  {
    id: 'kishlak',
    name: 'Кишлак',
    title: 'Сквозь шум и тишину',
    description:
      'Кишла́к (настоящее имя — Макси́м Серге́евич Фисе́нко; род. 14 декабря 1998, Североморск) — российский музыкант.До проекта «Кишлак» Фисенко успел создать и закрыть много других проектов: «Автостопом по фазе сна», «Bisexual From The Village», «Солнечный Муслим», «Русалочье урочище», «писък» и другие малоизвестные',
    image:
      'https://i.pinimg.com/736x/dc/31/3d/dc313d867538a32b693d0af292995c78.jpg',
    genre: 'Хип-Хоп / альтернативный рэп',
    era: 'ДОРОГУ МОЛОДЫМ!',
    mood: 'мрачный · агрессивный · атмосферный',
    tracks: ['Потолок', 'Город в пламени', 'Трезвый взгляд(НЕТ)', 'Свет в окне']
  },
  {
    id: 'madk1d',
    name: 'Madk1d',
    title: 'Сквозь рваный темп',
    description:
      'Серков Марк Робертович (родился 11 апреля 2002 года в Томске) — российский музыкальный исполнитель. Карьеру музыканта начал в 2020 году, первую аудиторию обрёл после фита с LILCAK3 на треке «КАТЮХА».',
    image:
      'https://i.pinimg.com/736x/73/b9/61/73b961f5b21c66a4bdf60dbd517a151c.jpg',
    genre: 'Рэп / клубный бит',
    era: 'SEXYSWAG',
    mood: 'добряк · дерзкий · быстрый',
    tracks: ['Силы на нуле', 'Под холодным светом', 'Внутри лома', 'Мой темп']
  },
  {
    id: 'dark-prince',
    name: 'Тёмный принц',
    title: 'Король ночного настроения',
    description:
      'Тёмный принц — это образ тишины и силы, в котором звук становится властным. Его музыка завораживает плотной атмосферой и глубокой внутренней линией.',
    image:
      'https://i.pinimg.com/736x/1b/f6/94/1bf6948ff8d71fc5d691eb3a58fb36d3.jpg',
    genre: 'Тёмный хип-хоп / мрачная атмосфера',
    era: 'MILITANTUM',
    mood: 'тёмный · атмосферный · мощный',
    tracks: ['Ночь без сна', 'Король теней', 'Серый день', 'Внутри костра']
  },
  {
    id: 'villian',
    name: 'Villian',
    title: 'Резкая энергия',
    description:
      'Зелинский Андрей Андреевич — российский рэп-исполнитель из Москвы. Всё детство и юношество провёл в Волгограде, а в 2026 году вернулся обратно в столицу. Начал заниматься музыкой в 2023 году. Участник объединения ​ALIVE.',
    image:
      'https://i.pinimg.com/736x/b0/82/ae/b082ae17fd7956dde407e8b9c6afca5d.jpg',
    genre: 'Рэп / тёмная энергия',
    era: 'ALIVE',
    mood: 'жесткий · мрачный · мощный',
    tracks: ['Ненастье', 'Без фона', 'Острый взгляд', 'Темный маршрут']
  },
  {
    id: 'cupsize',
    name: 'Cupsize',
    title: 'Лирика и образ',
    description:
      '
 Featured
435 Followers
All Activity
CUPSIZE 1,448
@gruppacupsize | 
Гаражная инди-группа с элементами лоуфай-блюза и панка из города Ярославль.

Первой работой коллектива стал мини-альбом дели на два. На релизе затронуты преимущественно любовные темы, но в классической сатирической стилизации группы.

После успеха EP, спустя два месяца, а именно в декабре 2023 года, вышел первый полноформатный альбом группы — Как испортить вечеринку?. Пластинку можно назвать по-настоящему прорывной в плане российской музыки. Большинство тем, затронутых там, имеет сатирический характер, что и стало главной «фишкой» группы.

Спустя почти год, в сентябре 2024 года, группа выпустила второй альбом с достаточно мрачным названием — кажется, в аду прикольно, но меня выгнали б утром. На релизе ребята погружаются больше в гаражное звучание со смесью психоделики, но треки всё также наполнены привычной для слушателя сатирой.

В рамках тура «Заставь меня плакать» группа анонсировала одноимённый полноформатный альбом. Его релиз со временем превратился в локальный мем среди фанатов из-за постоянно меняющейся даты выхода. На данный момент «Заставь меня плакать» запланирован к релизу весной 2026 года, несмотря на то что изначально альбом должен был выйти зимой 2025.

Пока слушатели продолжают ожидать долгожданный релиз, группа остаётся активной и регулярно выпускает новую музыку. В апреле 2025 года выходит в моих легких выросли цветы — весенний релиз в жанре инди-психоделики, который можно рассматривать как пролог к «Заставь меня плакать». В сентябре того же года группа представляет гранж-панк сборник неуравновешеннолетниепесни pt.1. Ближе к концу года выходит макси-сингл «прыгайдуравишлист!» — работа, продолжающая выбранную стилистическую линию и расширяющая звучание группы.',
    image:
      'https://i.pinimg.com/736x/e0/4a/8f/e04a8f871eb3cee0d9308a06b0cad7b7.jpg',
    genre: 'Современный рэп / эмоциональный стиль',
    era: '2020 — настоящее время',
    mood: 'эмоциональный · насыщенный · стильный',
    tracks: ['Мигает свет', 'Тонкая грань', 'Снова ночь', 'Тени в лобби']
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
