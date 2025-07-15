// Em: lib/charlie-locations.js

const bookingBaseUrl = 'https://www.staycharlie.com.br/?utm_source=analyticssummit&utm_medium=mapa';
// Data do evento: 16 de Outubro de 2025
const startDate = '2025-10-15'; // Check-in
const endDate = '2025-10-16';   // Check-out

const createBookingLink = (slug) => {
  if (!slug || slug.startsWith('placeholder')) return bookingBaseUrl; // Retorna a URL base para placeholders
  return `${bookingBaseUrl}${slug}?city=SP&start_date=${startDate}&end_date=${endDate}&guests=1&rooms=true`;
};

export const charlieLocations = [
  { name: "Charlie UWIN Brooklin", address: "Rua Eleutério, 59, Brooklin, São Paulo", slug: "charlie-uwin-brooklin", coords: [-23.6234, -46.6955] },
  { name: "Charlie Melo Palheta", address: "Rua Melo Palheta, 301, Perdizes, São Paulo", slug: "placeholder-slug-1", coords: [-23.5357, -46.6831] },
  { name: "Charlie Sabiá", address: "Av. Sabiá, 641, Moema, São Paulo", slug: "placeholder-slug-2", coords: [-23.6063, -46.6698] },
  { name: "Charlie Margaridas", address: "Rua das Margaridas, 308, Brooklin, São Paulo", slug: "placeholder-slug-3", coords: [-23.6156, -46.6896] },
  { name: "Charlie Correia Dias", address: "Rua Correia Dias, 441, Paraíso, São Paulo", slug: "placeholder-slug-4", coords: [-23.5765, -46.6441] },
  { name: "Charlie Cancioneiro", address: "Rua Cancioneiro de Évora, 85, Santo Amaro, São Paulo", slug: "placeholder-slug-5", coords: [-23.6398, -46.7115] },
  { name: "Charlie Constantino", address: "Rua Constantino de Sousa, 32, Campo Belo, São Paulo", slug: "placeholder-slug-6", coords: [-23.6289, -46.6732] },
  { name: "Charlie Bartira 1004", address: "Rua Bartira, 1004, Perdizes, São Paulo", slug: "placeholder-slug-7", coords: [-23.5383, -46.6784] },
  { name: "Charlie Sebastião Gomes", address: "Rua Sebastião Gomes, 71, Brooklin, São Paulo", slug: "placeholder-slug-8", coords: [-23.626, -46.681] },
  { name: "Charlie Vergueiro 4392", address: "Rua Vergueiro, 4392, Vila Mariana, São Paulo", slug: "placeholder-slug-9", coords: [-23.593, -46.6322] },
  { name: "Charlie Bartira 1003", address: "Rua Bartira, 1003, Perdizes, São Paulo", slug: "placeholder-slug-10", coords: [-23.5384, -46.6783] },
  { name: "Charlie Gregório Serrão", address: "Rua Gregório Serrão, 146, Vila Mariana, São Paulo", slug: "placeholder-slug-11", coords: [-23.582, -46.6372] },
  { name: "Charlie Loefgren", address: "Rua Loefgren, 2527, Vila Clementino, São Paulo", slug: "placeholder-slug-12", coords: [-23.6035, -46.6416] },
  { name: "Charlie Ascendino Reis", address: "Av. Professor Ascendino Reis, 1300, Moema, São Paulo", slug: "placeholder-slug-13", coords: [-23.6015, -46.6617] },
  { name: "Charlie Cristiano Viana", address: "Rua Cristiano Viana, 216, Jardim Paulista, São Paulo", slug: "placeholder-slug-14", coords: [-23.5592, -46.6749] },
  { name: "Charlie Eucaliptos", address: "Avenida dos Eucaliptos, 815, Moema, São Paulo", slug: "placeholder-slug-15", coords: [-23.6111, -46.6758] },
  { name: "Charlie Fernão Cardim", address: "Alameda Fernão Cardim, 70, Jardim Paulista, São Paulo", slug: "placeholder-slug-16", coords: [-23.5689, -46.652] },
  { name: "Charlie Sansão", address: "R. Sansão Alves dos Santos, 56, Berrini, São Paulo", slug: "placeholder-slug-17", coords: [-23.6074, -46.6953] },
  { name: "Charlie Bela Cintra", address: "Rua Bela Cintra, 1958, Jardim Paulista, São Paulo", slug: "placeholder-slug-18", coords: [-23.5601, -46.6663] },
  { name: "Charlie Haddock Lobo", address: "Rua Haddock Lobo, 720, Jardim Paulista, São Paulo", slug: "placeholder-slug-19", coords: [-23.562, -46.6631] },
  { name: "Charlie Renascença", address: "R. Renascença, 113, Vila Congonhas, São Paulo", slug: "placeholder-slug-20", coords: [-23.634, -46.666] },
  { name: "Charlie Apeninos", address: "Rua Apeninos, 1070, Paraíso, São Paulo", slug: "placeholder-slug-21", coords: [-23.5786, -46.6439] },
  { name: "Charlie Francisco Morato", address: "Avenida Professor Francisco Morato, 292, Butantã, São Paulo", slug: "placeholder-slug-22", coords: [-23.5714, -46.705] },
  { name: "Charlie Carlos Petit", address: "Rua Carlos Petit, 215, Vila Mariana, São Paulo", slug: "placeholder-slug-23", coords: [-23.5855, -46.6346] },
  { name: "Charlie Harmonia", address: "Rua Harmonia, 1237, Vila Madalena, São Paulo", slug: "placeholder-slug-24", coords: [-23.5482, -46.6937] },
  { name: "Charlie João Cachoeira", address: "Rua João Cachoeira, 1577, Itaim Bibi, São Paulo", slug: "placeholder-slug-25", coords: [-23.5935, -46.6806] },
  { name: "Charlie Alameda Iraé", address: "Alameda Iraé, 664, Moema, São Paulo", slug: "placeholder-slug-26", coords: [-23.609, -46.6677] },
  { name: "Charlie Joaquim Távora 241", address: "Rua Joaquim Távora, 241, Vila Mariana, São Paulo", slug: "placeholder-slug-27", coords: [-23.5802, -46.6393] },
  { name: "Charlie Jesuíno Cardoso", address: "R. Min. Jesuíno Cardoso, 148, Itaim Bibi, São Paulo", slug: "placeholder-slug-28", coords: [-23.5959, -46.6853] },
  { name: "Charlie Jerônimo da Veiga", address: "R. Jerônimo da Veiga, 248, Itaim Bibi, São Paulo", slug: "placeholder-slug-29", coords: [-23.582, -46.681] },
  { name: "Charlie Pamplona", address: "Rua Pamplona, 950, Jardim Paulista, São Paulo", slug: "placeholder-slug-30", coords: [-23.566, -46.6576] },
  { name: "Charlie Pedroso Alvarenga", address: "Rua Pedroso Alvarenga, 543, Itaim Bibi, São Paulo", slug: "placeholder-slug-31", coords: [-23.5826, -46.6781] },
  { name: "Charlie Gravataí", address: "R. Gravataí, 87, Consolação, São Paulo", slug: "placeholder-slug-32", coords: [-23.546, -46.6453] },
  { name: "Charlie Madre Cabrini", address: "R. Me. Cabrini, 99, Vila Mariana, São Paulo", slug: "placeholder-slug-33", coords: [-23.5878, -46.6358] },
  { name: "Charlie Agissê", address: "Rua Agissê, 247, Vila Madalena, São Paulo", slug: "placeholder-slug-34", coords: [-23.5539, -46.692] },
  { name: "Charlie Nicolau de Sousa", address: "Rua Doutor Nicolau de Sousa Queirós, 461, Paraíso, São Paulo", slug: "placeholder-slug-35", coords: [-23.5759, -46.642] },
  { name: "Charlie Alameda Franca", address: "Alameda Franca, 444, Jardim Paulista, São Paulo", slug: "placeholder-slug-36", coords: [-23.565, -46.6603] },
  { name: "Charlie Rubem Berta", address: "Av. Rubem Berta, 850, Moema, São Paulo", slug: "placeholder-slug-37", coords: [-23.604, -46.659] },
  { name: "Charlie Rego Freitas", address: "Rua Rego Freitas, 484, Consolação, São Paulo", slug: "placeholder-slug-38", coords: [-23.545, -46.648] },
  { name: "Charlie Morais de Barros", address: "Rua Morais de Barros, 880, Campo Belo, São Paulo", slug: "placeholder-slug-39", coords: [-23.623, -46.671] },
  { name: "Charlie Av. Iraí", address: "Av. Iraí, 205, Moema, São Paulo", slug: "placeholder-slug-40", coords: [-23.611, -46.666] },
  { name: "Charlie Bueno Brandão", address: "Rua Bueno Brandão, 382, Itaim Bibi, São Paulo", slug: "placeholder-slug-41", coords: [-23.586, -46.672] },
  { name: "Charlie Alves Guimarães 105", address: "R. Alves Guimarães, 105, Pinheiros, São Paulo", slug: "placeholder-slug-42", coords: [-23.560, -46.672] },
  { name: "Charlie Artur de Azevedo", address: "Rua Artur de Azevedo, 527, Pinheiros, São Paulo", slug: "placeholder-slug-43", coords: [-23.561, -46.678] },
  { name: "Charlie Bento Frias", address: "R. Bento Frias, 155, Pinheiros, São Paulo", slug: "placeholder-slug-44", coords: [-23.568, -46.697] },
  { name: "Charlie Vergueiro 1661", address: "Rua Vergueiro, 1661, Vila Mariana, São Paulo", slug: "placeholder-slug-45", coords: [-23.574, -46.640] },
  { name: "Charlie Pequetita", address: "R. Pequetita, 111, Vila Olímpia, São Paulo", slug: "placeholder-slug-46", coords: [-23.598, -46.689] },
  { name: "Charlie Fernão Dias", address: "R. Fernão Dias, 551, Pinheiros, São Paulo", slug: "placeholder-slug-47", coords: [-23.565, -46.698] },
  { name: "Charlie Guilherme Bannitz", address: "Rua Dr. Guilherme Bannitz, 61, Itaim Bibi, São Paulo", slug: "placeholder-slug-48", coords: [-23.594, -46.684] },
  { name: "Charlie Virgílio de Carvalho", address: "Rua Doutor Virgílio de Carvalho Pinto, 262, Pinheiros, São Paulo", slug: "placeholder-slug-49", coords: [-23.559, -46.689] },
  { name: "Charlie Rebouças", address: "Av. Rebouças, 2636, Pinheiros, São Paulo", slug: "placeholder-slug-50", coords: [-23.564, -46.686] },
  { name: "Charlie Sempre Vivas", address: "Rua das sempre vivas, 21, Brooklin, São Paulo", slug: "placeholder-slug-51", coords: [-23.620, -46.693] },
  { name: "Charlie Girassol", address: "R. Girassol, 1280, Vila Madalena, São Paulo", slug: "placeholder-slug-52", coords: [-23.549, -46.694] },
  { name: "Charlie Capote Valente", address: "Rua Capote Valente, 80, Pinheiros, São Paulo", slug: "placeholder-slug-53", coords: [-23.560, -46.671] },
  { name: "Charlie dos Pinheiros", address: "R. dos Pinheiros, 1057, Pinheiros, São Paulo", slug: "placeholder-slug-54", coords: [-23.567, -46.689] },
  { name: "Charlie Jacques Felix", address: "Rua Jacques Felix, 601, Vila Nova Conceição, São Paulo", slug: "placeholder-slug-55", coords: [-23.591, -46.678] },
  { name: "Charlie Luís Coelho", address: "R. Luís Coelho, 80, Consolação, São Paulo", slug: "placeholder-slug-56", coords: [-23.558, -46.657] },
  { name: "Charlie Alves Guimarães 251", address: "Rua Alves de Guimarães, 251, Pinheiros, São Paulo", slug: "placeholder-slug-57", coords: [-23.561, -46.673] },
  { name: "Charlie Alves Guimarães 170", address: "R. Alves Guimarães, 170, Pinheiros, São Paulo", slug: "placeholder-slug-58", coords: [-23.560, -46.672] },
  { name: "Charlie Jamaris", address: "Av Jamaris, 407, Moema, São Paulo", slug: "placeholder-slug-59", coords: [-23.616, -46.665] },
  { name: "Charlie Joaquim Távora 768", address: "Rua Joaquim Távora, 768, Vila Mariana, São Paulo", slug: "placeholder-slug-60", coords: [-23.583, -46.641] },
  { name: "Charlie Avenida Açocê", address: "Avenida Açocê, 50, Moema, São Paulo", slug: "placeholder-slug-61", coords: [-23.610, -46.668] },
].map(location => ({
    ...location,
    bookingLink: createBookingLink(location.slug)
}));