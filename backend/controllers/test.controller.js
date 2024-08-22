export const getMessage = async (req, res) => {
  return res.status(200).json({
    message: "Testings",
  });
};
