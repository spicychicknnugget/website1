document.addEventListener('DOMContentLoaded', (event) => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });

      this.classList.add('active');
    });
  });
});

$(document).ready(function() {
    $('.list-item').on('click', function() {
        var targetId = $(this).data('target');
        var targetElement = $('#image-column #' + targetId);

        if (targetElement.length) {
            var container = $('#image-column');
            var containerTop = container.offset().top;
            var targetTop = targetElement.offset().top;
            var scrollPosition = targetTop - containerTop + container.scrollTop();

            container.animate({ scrollTop: scrollPosition }, 1000);
        }
    });
});

$(document).ready(function() {
    $('.nav-link[data-target="#BIO"]').on('click', function(event) {
        event.preventDefault(); 
      
        var targetSelector = $(this).attr('data-target');
        var targetSection = $(targetSelector);

        if (targetSection.length) {
            var container = $('#image-column');
            var containerTop = container.offset().top;
            var targetTop = targetSection.offset().top;
            var scrollPosition = targetTop - containerTop + container.scrollTop();

            container.animate({
                scrollTop: scrollPosition 
            }, 1000);
        }
    });
});

$(document).ready(function() {
    $('#image-column').on('scroll', function() {
        var currentSection = '';
        $('#image-column .section').each(function() {
            if ($(this).isInViewport()) {
                currentSection = this.id; 
            }
        });

        if(currentSection) {
            $('#projectname').text('[' + currentSection + ']').addClass('mobile-styling'); 
        }
    });
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var container = $('#image-column');
    var viewportTop = container.scrollTop();
    var viewportBottom = viewportTop + container.height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};

window.onload = function() {
    document.getElementById("popupBanner").style.display = "flex";
};

function closePopup() {
    document.getElementById("popupBanner").style.display = "none";
}

$(window).on('scroll', function() {
    $('#image-container .section').each(function() {
        if ($(this).isInViewport()) {
            $('#image-container .section').removeClass('scroll-animation');

            $(this).addClass('scroll-animation');
        }
    });
});

$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(document).ready(function(){
  var modal = $('#myModal');

  $('#image-column img').click(function(){
    modal.show();
    $('#img01').attr('src', this.src);
    $('#caption').html(this.alt);

    var currentSectionId = $(this).closest('.section').attr('id');
    images = $('#' + currentSectionId + ' img');
    
    currentImageIndex = images.index(this);
  });

  var span = $('.close')[0];
  span.onclick = function() { 
    modal.hide();
  }

  $('.prev').click(function() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      $('#img01').attr('src', images.eq(currentImageIndex).attr('src'));
      $('#caption').html(images.eq(currentImageIndex).attr('alt'));
    }
  });

  $('.next').click(function() {
    if (currentImageIndex < images.length - 1) {
      currentImageIndex++;
      $('#img01').attr('src', images.eq(currentImageIndex).attr('src'));
      $('#caption').html(images.eq(currentImageIndex).attr('alt'));
    }
  });
});

$(document).ready(function() {
    $('#drawingsLink').on('click', function() {
        $('#drawingsModal').show();
    });

    $('.close').on('click', function() {
        $('#drawingsModal').hide();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#drawingsModal')) {
            $('#drawingsModal').hide();
        }
    });
});

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});