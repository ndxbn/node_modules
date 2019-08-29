workflow "Node.js CI" {
  on = "push"
  resolves = ["Setup Node.js for use with actions"]
}

action "Setup Node.js for use with actions" {
  uses = "actions/setup-node@7af5963081f4115489390c8e8e31da346136cb37"
}
