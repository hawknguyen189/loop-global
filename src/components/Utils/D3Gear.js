import * as d3 from 'd3'
const D3Gear = () => {
  // const svg = d3.select('#ecosystemD3'),
  //   width = +svg.attr('width'),
  //   height = +svg.attr('height')
  //   const svg = d3
  //     .select('#ecosystem')
  //     .append('svg')
  //     .attr('width', width)
  //     .attr('height', height)
  //     .attr('viewBox', [-width / 2, -height / 2, width, height])
  //     .attr('id', 'disjointDragChart')

  var w = 500,
    h = 500,
    r = 80,
    x = Math.sin((2 * Math.PI) / 3),
    y = Math.cos((2 * Math.PI) / 3),
    speed = 4,
    start = Date.now()

  var svg = d3
    .select('#ecosystemD3')
    .attr('width', w)
    .attr('height', h)
    .append('svg:g')
    .attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')scale(.55)')
    .append('svg:g')
    .data([{ radius: Infinity }])

  svg
    .append('svg:g')
    .attr('class', 'ring')
    .data([{ teeth: 80, radius: -r * 5, ring: true }])
    .append('svg:path')
    .attr('d', gear)

  svg
    .append('svg:g')
    .attr('class', 'sun')
    .data([{ teeth: 16, radius: r }])
    .append('svg:path')
    .attr('d', gear)
    .append('text')
    .attr('x', 6)
    .attr('y', 3)
    .text('foo')

  svg
    .append('svg:g')
    .attr('class', 'planet')
    .attr('transform', 'translate(0,-' + r * 3 + ')')
    .data([{ teeth: 32, radius: -r * 2 }])
    .append('svg:path')
    .attr('d', gear)

  svg
    .append('svg:g')
    .attr('class', 'planet')
    .attr('transform', 'translate(' + -r * 3 * x + ',' + -r * 3 * y + ')')
    .data([{ teeth: 32, radius: -r * 2 }])
    .append('svg:path')
    .attr('d', gear)

  svg
    .append('svg:g')
    .attr('class', 'planet')
    .attr('transform', 'translate(' + r * 3 * x + ',' + -r * 3 * y + ')')
    .data([{ teeth: 32, radius: -r * 2 }])
    .append('svg:path')
    .attr('d', gear)

  d3.selectAll('input[name=reference]')
    .data([r * 5, Infinity, -r])
    .on('change', function(d) {
      svg.data([{ radius: d }])
    })

  d3.selectAll('input[name=speed]').on('change', function() {
    speed = +this.value
  })

  function gear(d) {
    var n = d.teeth,
      r2 = Math.abs(d.radius),
      r0 = r2 - 8,
      r1 = r2 + 8,
      r3 = d.ring ? ((r3 = r0), (r0 = r1), (r1 = r3), r2 + 20) : 20,
      da = Math.PI / n,
      a0 = -Math.PI / 2 + (d.ring ? Math.PI / n : 0),
      i = -1,
      path = ['M', r0 * Math.cos(a0), ',', r0 * Math.sin(a0)]
    while (++i < n)
      path.push(
        'A',
        r0,
        ',',
        r0,
        ' 0 0,1 ',
        r0 * Math.cos((a0 += da)),
        ',',
        r0 * Math.sin(a0),
        'L',
        r2 * Math.cos(a0),
        ',',
        r2 * Math.sin(a0),
        'L',
        r1 * Math.cos((a0 += da / 3)),
        ',',
        r1 * Math.sin(a0),
        'A',
        r1,
        ',',
        r1,
        ' 0 0,1 ',
        r1 * Math.cos((a0 += da / 3)),
        ',',
        r1 * Math.sin(a0),
        'L',
        r2 * Math.cos((a0 += da / 3)),
        ',',
        r2 * Math.sin(a0),
        'L',
        r0 * Math.cos(a0),
        ',',
        r0 * Math.sin(a0)
      )
    path.push(
      'M0,',
      -r3,
      'A',
      r3,
      ',',
      r3,
      ' 0 0,0 0,',
      r3,
      'A',
      r3,
      ',',
      r3,
      ' 0 0,0 0,',
      -r3,
      'Z'
    )
    return path.join('')
  }

  d3.timer(function() {
    var angle = (Date.now() - start) * speed,
      transform = function(d) {
        return 'rotate(' + angle / d.radius + ')'
      }
    svg.selectAll('path').attr('transform', transform)
    svg.attr('transform', transform) // frame of reference
  })
}
export default D3Gear;