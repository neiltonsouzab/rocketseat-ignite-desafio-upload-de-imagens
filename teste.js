const arr = {
  pages: [
    {
      data: [
        {
          title: 'Doge',
          description: 'The best doge',
          url: 'https://i.ibb.co/K6DZdXc/minh-pham-LTQMgx8t-Yq-M-unsplash.jpg',
          ts: 1620222828340000,
          id: '294961059684418048',
        },
        {
          title: 'Cachorrinho gif',
          description: 'A Gracie é top',
          url: 'https://i.ibb.co/r3NbmgH/ezgif-3-54a30c130cef.gif',
          ts: 1620222856980000,
          id: '295991055792210435',
        },
        {
          title: 'React',
          description: 'Dan Abramov',
          url: 'https://i.ibb.co/864qfG3/react.png',
          ts: 1620223108460000,
          id: '295991069654385154',
        },
        {
          title: 'Ignite',
          description: 'Wallpaper Celular',
          url: 'https://i.ibb.co/DbfGQW5/1080x1920.png',
          ts: 1620223119610000,
          id: '295991085899973123',
        },
        {
          title: 'Ignite',
          description: 'Wallpaper PC 4k',
          url: 'https://i.ibb.co/fvYLKFn/3840x2160.png',
          ts: 1620223133800000,
          id: '295991107279389188',
        },
        {
          title: 'Paisagem',
          description: 'Sunset',
          url: 'https://i.ibb.co/st42sNz/petr-vysohlid-9fqw-Gq-GLUxc-unsplash.jpg',
          ts: 1620223149390000,
          id: '295991128736399874',
        },
      ],
      after: '295991160078336512',
    },
  ],
  pageParams: [null],
};

const newArr = arr.pages.map(item => item.data);

console.log(newArr.flat());
