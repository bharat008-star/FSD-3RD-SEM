function calc_area(radius) {
    
   return Math.PI * radius * radius

}
function calc_peri(radius) {
    return 2 * Math.PI * radius
}
module.exports = { calc_area, calc_peri }