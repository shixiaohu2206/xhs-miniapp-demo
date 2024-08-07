var slicePhoneNumber = function (phoneNumber) {
  if (!phoneNumber || phoneNumber.length !== 11) return "";
  return (
    phoneNumber.substring(0, 3) +
    " " +
    phoneNumber.substring(3, 7) +
    " " +
    phoneNumber.substring(7, 11)
  );
};

module.exports = {
  slicePhoneNumber: slicePhoneNumber,
};
