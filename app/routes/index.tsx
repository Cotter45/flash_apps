import type { MetaFunction, LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

type IndexData = {
  demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    demos: [
      {
        to: "/calculator",
        name: "Calculator"
      },
      {
        to: "/images",
        name: "Images, efficient loading and effects"
      },
      {
        to: "/canvas",
        name: "HTML Canvas with react"
      }
    ]
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Flash Apps",
    description: "Small apps built with Typescript and React-Remix!"
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Flash Apps!</h2>
        <p>
          This is a small website where I will periodically be building small
          apps with Typescript and React-Remix. These will be mostly simple things
          like a calculator or a simple todo list, just to get practice with Typescript 
          and try some new things along the way.
        </p>
        <p>
          This is my first time using React-Remix, so I'm not sure how it will go,
          but I'm excited to see what it can do! I hope you enjoy!
        </p>
      </main>
      <aside>
        <h2>Apps In This App</h2>
        <ul>
          {data.demos.map(demo => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
