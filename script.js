const artists = [
  {
    id: 'kishlak',
    name: 'Кишлак',
    title: 'Сквозь шум и тишину',
    description:
      'Кишлак — артист с резким характером, плотной ритмикой и мощной подачей. Его музыка чувствуется как энергия, собранная из города, боли, движения и внутреннего напряжения.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
    genre: 'Хип-Хоп / альтернативный рэп',
    era: '2020 — настоящее время',
    mood: 'мрачный · агрессивный · атмосферный',
    tracks: ['Потолок', 'Город в пламени', 'Трезвый взгляд', 'Свет в окне']
  },
  {
    id: 'madk1d',
    name: 'Madk1d',
    title: 'Сквозь рваный темп',
    description:
      'Madk1d сочетает жесткие ритмы с холодной визуальной эстетикой. Его стиль — это динамизм, резкость и чувство дистанции, которое цепляет с первого прослушивания.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    genre: 'Рэп / клубный бит',
    era: '2019 — настоящее время',
    mood: 'холодный · дерзкий · быстрый',
    tracks: ['Силы на нуле', 'Под холодным светом', 'Внутри лома', 'Мой темп']
  },
  {
    id: 'dark-prince',
    name: 'Тёмный принц',
    title: 'Король ночного настроения',
    description:
      'Тёмный принц — это образ тишины и силы, в котором звук становится властным. Его музыка завораживает плотной атмосферой и глубокой внутренней линией.',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    genre: 'Тёмный хип-хоп / мрачная атмосфера',
    era: '2018 — настоящее время',
    mood: 'тёмный · атмосферный · мощный',
    tracks: ['Ночь без сна', 'Король теней', 'Серый день', 'Внутри костра']
  },
  {
    id: 'villian',
    name: 'Villian',
    title: 'Резкая энергия',
    description:
      'Villian — это образ резкого, уверенного и агрессивного звучания. В его музыке ощущение движения и бескомпромиссной линии остаётся с собой надолго.',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80',
    genre: 'Рэп / тёмная энергия',
    era: '2021 — настоящее время',
    mood: 'жесткий · мрачный · мощный',
    tracks: ['Ненастье', 'Без фона', 'Острый взгляд', 'Темный маршрут']
  },
  {
    id: 'cupsize',
    name: 'Cupsize',
    title: 'Лирика и образ',
    description:
      'Cupsize — музыка о настроении, форме и ритмическом внутреннем рисунке. Его исполнение заметно своей особенной подачей и артистической глубиной.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80',
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
