interface alertsauxparameters {
  elementsid: string[];
  effect: boolean;
  page?: string;
  exeptionspages?: {
    id: string;
    pagename: string;
  }[];
}
export default function Alertaux({
  effect,
  elementsid,
  page,
  exeptionspages,
}: alertsauxparameters) {
  elementsid.forEach((i) => {
    const element = document.getElementById(i) as HTMLElement;
    element &&
      (function () {
        if (effect) {
          element.style.position = "relative";
          element.style.zIndex = "-1";
        } else {
          element.style.position = "static";
          element.style.zIndex = "50";
        }
    })();
});

//special cases
  exeptionspages?.forEach((i) => {
    const element = document.getElementById(i.id) as HTMLElement;
    element &&
      (function () {
        if (effect && page !== i.pagename) {
          element.style.position = "relative";
          element.style.zIndex = "-1";
        } else {
          element.style.position = "static";
          element.style.zIndex = "50";
        }
      })();
  });
}
