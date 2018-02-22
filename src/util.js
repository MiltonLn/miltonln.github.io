const $ = window.$

export const tooltip = (text, placement='bottom') => ({
    'data-original-title': text,
    'data-toggle': 'tooltip',
    'data-placement': placement,
    onMouseEnter: (e) => {
        $('[data-toggle="tooltip"]').tooltip('hide')
        $(e.target).tooltip()
    },
    onMouseLeave: (e) => {
        $('[data-toggle="tooltip"]').tooltip('hide')
        $(e.target).tooltip('hide')
    },
})

export const yearsUntilNow = (initialYear) => {
    const currentYear = new Date().getFullYear()
    return currentYear - initialYear || 1
}

export const initializeCharts = () => {
    $('.chart').easyPieChart({    
      barColor:'#00BCD4',
      trackColor: '#e8e8e8',
      scaleColor: false,
      lineWidth : 5,
      animate: 2000,
      onStep: function(from, to, percent) {
        $(this.el).find('span').text(Math.round(percent))
      }
    })
}

export const initializeIsotopePlugin = () => {
    const $container = $('.isotope')
    
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        })
    })
    
    // filter items on click
    $('#filters').on( 'click', '.type', function() {
      const filterValue = $(this).attr('data-filter')
      $container.isotope({ filter: filterValue })
    })
    
    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        const $typeGroup = $( typeGroup )
        $typeGroup.on( 'click', '.type', function() {
          $typeGroup.find('.active').removeClass('active')
          $( this ).addClass('active')
        })
    })
}

export const scrollToSection = (section) => {
  var target = `#${section}-section`
  $('body').scrollTo(target, 800, {offset: -60, 'axis':'y'})
}