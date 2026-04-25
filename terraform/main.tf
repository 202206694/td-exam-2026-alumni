resource "google_container_cluster" "primary" {
  name     = <placeholder>
  location = <placeholder>

  remove_default_node_pool = true
  initial_node_count       = 1
  deletion_protection = false

  network    = "default"
  subnetwork = "default"
}

resource "google_container_node_pool" "primary_nodes" {
  name       = "${<placeholder>}-node-pool"
  cluster    = google_container_cluster.primary.name
  location   = <placeholder>
  node_count = <placeholder>

  node_config {
    machine_type = <placeholder>
    disk_size_gb = "20"
    oauth_scopes = [
      "https://www.googleapis.com/auth/cloud-platform",
    ]
  }
}

