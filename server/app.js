const express = require('express');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const songRouter = require('./routes/song');
const contentsRouter = require('./routes/contents');
const mypageRouter = require('./routes/mypage');
const boardRouter = require('./routes/board');
const boardContentRouter = require('./routes/board_content');
const boardChatRouter = require('./routes/board_chat');

const app = express();

const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/song', songRouter);
app.use('/contents', contentsRouter);
app.use('/mypage', mypageRouter);
app.use('/board',boardRouter)
app.use('/board/content',boardContentRouter)
app.use('/board/chat',boardChatRouter)

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});