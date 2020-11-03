json.array! @portfolios do |portfolio|
  portfolio_updated_at = portfolio.updated_at.to_date

  json.id portfolio.id
  json.title portfolio.title
  json.description portfolio.description
  json.github portfolio.github
  json.url portfolio.url
  json.image portfolio.image
  json.userName portfolio.user.name
  json.updatedAt l(portfolio_updated_at, format: :long)
end
