const sahihaiImages = [
    'pics/beach.jpg',
    'pics/nightblack.jpg',
    'pics/family.jpg',
    'pics/waiter-serving.jpg'
  ];

  const thikhaiImages = [
    'pics/girl-with-paddle.jpg',
    'pics/breakfast-hotel.jpg',
    'pics/camp.jpg',
    'pics/sunset-pool.jpg'
  ];

  let sahihaiIndex = 0;
  let thikhaiIndex = 0;

  function changeSahihaiImage() {
    const sahihaiElement = document.querySelector('.sahihai');
    sahihaiElement.src = sahihaiImages[sahihaiIndex];
    sahihaiIndex = (sahihaiIndex + 1) % sahihaiImages.length;
  }

  function changeThikhaiImage() {
    const thikhaiElement = document.querySelector('.thikhai');
    thikhaiElement.src = thikhaiImages[thikhaiIndex];
    thikhaiIndex = (thikhaiIndex + 1) % thikhaiImages.length;
  }

  setInterval(changeSahihaiImage, 1500);
  setInterval(changeThikhaiImage, 1500);

  // <--Language-->

  // Array of different language translations for "Hello"
  const languages = ['Hallo','नमस्ते', '你好', 'Bonjour', 'Hola', 'Ciao','مرحبًا'];

  // Function to update the text with the next language
  function updateHelloText() {
    const helloTextElement = document.getElementById('helloText');
    const currentLanguage = helloTextElement.textContent;
    const nextLanguage = languages[(languages.indexOf(currentLanguage) + 1) % languages.length];
    helloTextElement.textContent = nextLanguage;
  }

  // Set interval to update the text 
  setInterval(updateHelloText, 7000);

  // Pop-up ad
  // let modalClosed = false;

  // Function to open the modal
  function openModal() {
    if (!modalClosed) {
      document.getElementById('myModal').style.display = 'block';
    }
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    modalClosed = true;
  }

  // Update text function (as in the previous example)
  function updateHelloTextAndOpenModal() {
    updateHelloText();

    // Show the ad modal after the first language change
    if (languages.indexOf(helloText.textContent) === languages.length - 1) {
      openModal();
    }
  }

  // Set interval to update the text every 0.7 seconds
  setInterval(updateHelloTextAndOpenModal, 700);