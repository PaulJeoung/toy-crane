module.exports = (req, res, next) => {
  // 사용자 인증 생략 - 무조건 통과
  next();
};
