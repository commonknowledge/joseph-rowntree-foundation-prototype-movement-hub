const express = require('express')
const router = express.Router()

router.get(
  '/join-the-community', (req, res) =>
  res.redirect(process.env.SLACK_INVITE_URL)
)
router.get(
  '/newsletter-subscription', (req, res) =>
  res.redirect('https://www.jrf.org.uk/subscription')
)
router.get(
  '/book-a-meeting', (req, res) =>
  res.redirect('https://commonknowledge.youcanbook.me')
)

module.exports = router
