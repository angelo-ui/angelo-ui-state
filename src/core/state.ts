export interface Core {
  UI?: {
    module: string;
    action: string;
    Page?: {
      title: string;
      content?: {
        [key: string]: any;
      };
    };
  };
}

export const Initial: Core = {};
