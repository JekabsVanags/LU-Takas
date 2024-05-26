import { base } from '$app/paths';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const years = [
    {
      programme_slug: "datoriki",
      year_slug: "1",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `${base}/trails.jpg`,
      courses_fall: [
        {
          title: "Algoritmu teorija",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Programmēšana I",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        }
      ],
      courses_spring: [
        {
          title: "Matemātiskā analīze",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas II",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        }
      ]
    },
    {
      programme_slug: "datoriki",
      year_slug: "2",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `${base}/trails.jpg`,
      courses_fall: [
        {
          title: "Algoritmu teorija",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Programmēšana I",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        }
      ],
      courses_spring: [
        {
          title: "Matemātiskā analīze",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas II",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        },
        {
          title: "Tīmekļa tehnoloģijas II",
          img: `${base}/trails.jpg`,
          altText: "alt1",
          teaser: "Something something",
          description: "longer description",
          content: "content"
        }
      ]
    },
    {
      programme_slug: "datoriki",
      year_slug: "3",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `${base}/trails.jpg`
    },
    {
      programme_slug: "datoriki",
      year_slug: "4",
      max_years: "4",
      name: "Datoriķu kursi",
      img: `${base}/trails.jpg`
    }
  ]

  const year = years.find((year) => year.programme_slug === params.name && year.year_slug === params.year);


  return year;
}
