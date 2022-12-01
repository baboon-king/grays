export type Nullable<T> = T | null;

export const noop = () => {};

export interface GraysOptions {
  className?: string;
  expire?: number;
  immediate?: boolean;
}

export const graysStyleGen = (
  className: string,
  value: number
) => `.${className} {
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

const emptyReturn = {
  apply: noop,
  cancel: noop,
} as const;

const appendStyle = (className: string, grayscale: number) => {
  const styleEl = document.createElement("style");

  styleEl.innerHTML = graysStyleGen(className, grayscale);

  document.head.append(styleEl);
};

export const grays = (
  selector: string = "html",
  grayscale: number = 99,
  options: GraysOptions = {}
) => {
  const elem: Nullable<HTMLElement> = document.querySelector(selector);

  if (!elem) {
    return emptyReturn;
  }

  const { className = "grays", expire, immediate = true } = options;

  const enable = expire ? Date.now() <= expire : true;

  if (!enable) {
    return emptyReturn;
  }

  appendStyle(className, grayscale);

  const apply = () => elem.classList.add(className);

  const cancel = () => elem.classList.remove(className);

  if (immediate) {
    apply();
  }
  return {
    apply,
    cancel,
  } as const;
};
