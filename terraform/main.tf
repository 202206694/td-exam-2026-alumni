resource "google_container_cluster" "primary" {
  name     = var.gcp-cluster-name
  location = var.gcp-zone

  remove_default_node_pool = true
  initial_node_count       = 1
  deletion_protection      = false

  network    = "default"
  subnetwork = "default"
}

resource "google_container_node_pool" "primary_nodes" {
  name       = "${var.gcp-cluster-name}-node-pool"
  cluster    = google_container_cluster.primary.name
  location   = var.gcp-zone
  node_count = var.gcp-node-count

  node_config {
    machine_type = var.gcp-node-size
    disk_size_gb = 20

    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }
}


