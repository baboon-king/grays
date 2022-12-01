type Nullable<T> = T | null;

export interface GraysOptions {
  className?: string;
  expire?: number;
  immediate?: boolean;
}

const graysStyleGen = (className: string, value: number) => `.${className} {
        filter: grayscale(${value}%);
        -webkit-filter: grayscale(${value}%);
        -moz-filter: grayscale(${value}%);
        -ms-filter: grayscale(${value}%);
        -o-filter: grayscale(${value}%);
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='grayscale'><feColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/></filter></svg>#grayscale");
        filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=.${value});
        -webkit-filter: grayscale(.${value})
    }
`;

const appendStyle = (className: string, grayscale: number) => {
  const styleEl = document.createElement("style");

  styleEl.innerHTML = graysStyleGen(className, grayscale);

  document.head.append(styleEl);
};

const exRun = (selector: string, fn: (elem: HTMLElement) => void) => {
  const elem: Nullable<HTMLElement> = document.querySelector(selector);
  if (!elem) {
    throw new Error(`selector: "${selector}" does not exist`);
  }
  fn(elem);
};

export const grays = (
  selector: string = "html",
  grayscale: number = 99,
  options: GraysOptions = {}
) => {
  const { className = "grays", expire, immediate = true } = options;

  appendStyle(className, grayscale);

  const apply = () => {
    exRun(selector, (elem) => elem.classList.add(className));
  };

  const cancel = () => {
    exRun(selector, (elem) => elem.classList.remove(className));
  };

  if (immediate) {
    const enable = expire ? Date.now() <= expire : true;
    if (enable) {
      apply();
    }
  }

  return {
    apply,
    cancel,
  } as const;
};
