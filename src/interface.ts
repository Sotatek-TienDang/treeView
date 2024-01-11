export interface UPLC {
  name: string;
  version: string;
  expressions: (UPLCItem | UPLCItem[])[];
}

export interface UPLCItem {
  name: string;
  body?: UPLCItem | UPLCItem[];
}

export const mockData: UPLC = {
  name: "program",
  version: "1.0.0",
  expressions: [
    [
      {
        name: "lam i_0",
        body: {
          name: "lam i_1",
          body: {
            name: "lam i_2",
            body: {
              name: "lam i_3",
              body: {
                name: "i_0",
              },
            },
          },
        },
      },
      {
        name: "delay",
        body: {
          name: "lam i_4",
          body: {
            name: "i_4",
          },
        },
      },
    ],
    {
      name: "lam i_5",
      body: {
        name: "i_5",
      },
    },
  ],
};
