import {setup} from "@storybook/vue3";
import i18n from "../src/i18n";
import pinia, {useCurrentUserStore} from "../src/pinia";
import {createRouter} from "../src/router";

// ストーリーごとに割り当てられる key-value 形式のメタデータ
export const parameters = {
  // Viewport addon で使用される設定
  viewport: {
    // プリセットをアプリケーションの仕様に合わせて定義
    viewports: {
      pc: {
        name: "Min PC Layout",
        styles: {
          width: "992px",
          height: "100%",
        },
      },
      mobile: {
        name: "Min Mobile Layout",
        styles: {
          width: "375px",
          height: "100%",
        },
      },
    },
    // すべてのストーリーでデフォルト PC ビューを使用する
    defaultViewport: "pc",
  },
};

// Storybook 全体で一意の設定となる key-value 形式のメタデータ
export const decorators = [
  (story, context) => {
    i18n.global.locale = context.globals.locale;
    return {
      setup() {
        const currentUserStore = useCurrentUserStore();
        currentUserStore.$reset();
      },
      template: "<story />"
    };
  },
];

// ストーリーをラップするラッパーコンポーネント
export const globalTypes = {
  locale: {
    name: "Locale",
    description: "多言語設定",
    defaultValue: "ja",
    toolbar: {
      icon: "globe",
      items: ["ja", "en"],
    },
  },
};

// Storybook 用にインメモリルーターを作成する
const router = createRouter("memory");

setup((app) => {
  // app が Vue インスタンスにあたるので Vue I18n インスタンスを注入する
  // 同一の Vue インスタンスに対して setup 関数は複数回実行されるため、既に注入済みかを確認する
  if (!app['__VUE_I18N__']) {
    app.use(i18n);
    app.use(pinia);
    app.use(router);
  }
});