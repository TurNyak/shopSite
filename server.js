const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Статичные файлы (например, когда билдим React-приложение)
app.use(express.static(path.join(__dirname, '../build')));

// Все другие запросы отправляем на фронт
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

