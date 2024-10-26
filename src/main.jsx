import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../style.css'; // style.cssをインポート

const rootElement = document.getElementById('content'); // 'content' IDを持つ要素を取得
if (!rootElement) {
  throw new Error('Root element not found'); // エラーメッセージを表示
}

const root = ReactDOM.createRoot(rootElement); // rootを作成
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
