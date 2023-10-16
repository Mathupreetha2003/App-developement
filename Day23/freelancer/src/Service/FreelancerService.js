import { freelancerApi } from "../api/axios";

class FreelancerService{
    getById(id){
        return freelancerApi.get(`/getfreelancerbyid/${id}`);
    }
}

export default new FreelancerService();