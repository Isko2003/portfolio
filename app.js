function downloadCV() {
  const link = document.createElement("a");
  link.href = "./Main Resume Ismayil.pdf";
  link.download = "main-resume-ismayil.pdf";
  link.click();
}
