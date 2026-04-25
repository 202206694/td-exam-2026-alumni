# NO INDICAR NINGÚN VALOR DEFAULT ADICIONAL. SE DEBE USAR EL FICHERO DE VARIABLES .TFVARS
variable "gcp-project" {
  description = "GCP project"
}

variable "gcp-network" {
  description = "GCP network"
  default     = "default"
}

variable "gcp-region" {
  description = "GCP region"
  type        = string
}
variable "gcp-zone" {
  description = "GCP zone"
  type        = string
}
variable "gcp-cluster-name" {
  description = "Cluster name"
  type        = string
}

variable "gcp-node-count" {
  description = "Number K8s Worker nodes"
  type        = number
}
variable "gcp-node-size" {
  description = "Size K8s Worker nodes"
  type        = string
}
