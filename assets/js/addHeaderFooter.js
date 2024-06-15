// $(window).on('load', async function () {
//       await addHeaderFooter()
// })
if (window.location.pathname != '/') {
      addHeaderFooter()
      console.log('not on home --')

} else {
      console.log('on home')
}
async function addHeaderFooter() {
      await fetch("/header.html" /*, options */)
            .then((response) => response.text())
            .then((html) => {
                  $('header')[0].innerHTML = html;
                  console.log('Header has been set')
                  console.log('ready from add header')
                  $('#product-btn').mouseenter(() => {
                        console.log('product-btn => mouseenter')
                        $('#submenu').show()
                  })
                  $('#submenu').mouseenter(() => {
                        $('#submenu').show()
                  })
                  $('#product-btn').mouseleave(() => {
                        $('#submenu').hide()
                  })
                  $('#submenu').mouseleave(() => {
                        $('#submenu').hide()
                  })

                  setSubMenuLeft()

                  window.addEventListener('resize', function (event) {
                        setSubMenuLeft()
                  }, true);

                  function setSubMenuLeft() {
                        var leftO = $('#product-btn').offset().left
                        var topO = $('#submenu').offset().top

                        console.log('left: ' + leftO + '   top: ' + topO)
                        $('#submenu').css({ left: leftO });
                  }

                  var topBanner = $('#banner-box').offset().top
                  var bannerHeight = $('#banner-box').height()
                  var bannerLeft = $('#banner-box').offset().left
                  var windowH = window.innerHeight;
                  var idealTop = ((Math.floor(window.innerHeight)) - (Math.floor(bannerHeight))) / 4
                  if (windowH < 920) {
                        idealTop = ((Math.floor(window.innerHeight)) - (Math.floor(bannerHeight))) / 2
                  }
                  $('#banner-box').css({ marginTop: idealTop });

                  // $('header')[0].classList.add('sticky-top')
                  // document.getElementById('network-name').innerHTML = 'BSC';
                  // document.getElementById('network-name').innerHTML = 'BSC';

            })
            .catch((error) => {
                  console.log('Warning for the header')
                  console.warn(error);
            });
      fetch("/footer.html" /*, options */)
            .then((response) => response.text())
            .then((html) => {
                  $('footer')[0].innerHTML = html;
                  //$('header')[0].classList.add('sticky-top')
            })
            .catch((error) => {
                  console.warn(error);
            });
}

function validateEmail(emailField) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test(emailField.value) == false) {
            emailField.style.backgroundColor = '#f1acb352'
            emailField.style.borderColor = '#ff000059'
            console.log('reg test is false here.')
            alert('Invalid Email Address.');

            return false;
      } else {
            emailField.style.borderColor = '#00FCA1'
            emailField.style.backgroundColor = '#e9fdf600'
            console.log('reg test is true.')

            return true;
      }
}
function submitEmail() {
      console.log('submitEmail clicked')
      var email = document.getElementById('email-subscription');

      if (email.value != '' && validateEmail(email)) {

            console.log('email good to go')
            $.ajax({
                  url: expressURL + 'addEmail?email=' + email.value,
                  type: 'get',
                  success: function (data) {
                        //# success
                        console.log('send email succeed')
                        window.alert('Email has been successfully registered.')
                  },
                  error: function (data) {
                        console.log('error')
                        console.info(data)

                        window.alert('Could not register the email.')

                  }
            });
      }
}


async function ConnectBtn() {
      console.log('Connect Button on header has been clicked.')
      connectWallet()
}
