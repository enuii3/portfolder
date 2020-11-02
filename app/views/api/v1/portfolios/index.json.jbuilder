json.array! @portfolios do |portfolio|
  json.id portfolio.id
  json.title portfolio.title
  json.description portfolio.description
  json.github portfolio.github
  json.url portfolio.url
  json.image portfolio.image
end
