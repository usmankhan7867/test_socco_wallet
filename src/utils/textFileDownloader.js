export const textDownloader = (text) => {
  const fileName = "secret-phrase.txt";
  // Create a Blob containing the text data with the specified MIME type
  const blob = new Blob([text], { type: "text/plain" });
  // Create a URL for the Blob
  const url = window.URL.createObjectURL(blob);
  // Create a download link element
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName; // Specify the file name you want
  // Trigger a click event on the link to start the download
  a.click();
  // Clean up by revoking the Blob URL
  window.URL.revokeObjectURL(url);
};
