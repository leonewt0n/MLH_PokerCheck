export const routes = [
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <div>Page not found</div>,
    children: [
      {
        path: "/1",
        element: <div>Hello from 1</div>,
      },
      {
        path: "*",
        element: <div>Page not found</div>,
      },
    ],
  },
];
