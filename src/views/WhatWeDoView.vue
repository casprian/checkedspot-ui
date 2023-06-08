<template>
    <v-container fluid class="pa-0">
        <!-- Company logo and header -->
        <v-row no-gutters class="whatwedoHeader">
            <v-col cols="12">
                <v-img src="@/assets/logocheckedspot.png" contain></v-img>
            </v-col>
        </v-row>

        <!-- Main content -->
        <v-row>
            <v-col cols="12">
                <!-- Section: Our Services -->
                <v-card>
                    <v-card-title>Our Services</v-card-title>
                    <v-card-text>
                        <p>
                            At XYZ Real Estate, we provide a comprehensive range of services to help you with all your real
                            estate needs. With our expert team and personalized approach, we are committed to delivering
                            exceptional results and making your real estate journey smooth and successful.
                        </p>
                        <ul>
                            <li>
                                <strong>Residential Property Sales and Purchases:</strong> Whether you're buying or selling
                                a home, our experienced agents will guide you through the process, ensuring you find the
                                perfect property or secure the best deal for your home.
                            </li>
                            <li>
                                <strong>Commercial Property Sales and Leasing:</strong> Our commercial real estate experts
                                specialize in helping businesses find the ideal commercial space and negotiate favorable
                                lease terms. We also assist in selling commercial properties to maximize returns.
                            </li>
                            <li>
                                <strong>Property Management and Rentals:</strong> For property owners, we offer professional
                                property management services, including tenant screening, rent collection, and maintenance
                                coordination. We also help tenants find quality rental properties that meet their needs and
                                budget.
                            </li>
                            <li>
                                <strong>Investment Property Consulting:</strong> Looking to invest in real estate? Our
                                investment property consultants provide expert advice and market insights to help you make
                                informed decisions and achieve your investment goals.
                            </li>
                            <li>
                                <strong>Real Estate Valuation and Appraisal:</strong> Our certified appraisers provide
                                accurate and detailed property valuations for various purposes, such as mortgage financing,
                                estate planning, or property tax assessments.
                            </li>
                            <li>
                                <strong>Real Estate Financing Assistance:</strong> We have partnerships with reputable
                                lenders and mortgage brokers who can help you secure the best financing options for your
                                real estate transactions, saving you time and money.
                            </li>
                        </ul>
                    </v-card-text>
                </v-card>

                <!-- Section: Why Choose Us -->
                <v-card>
                    <v-card-title>Why Choose Us</v-card-title>
                    <v-card-text>
                        <p>
                            At XYZ Real Estate, we stand out from the competition. Here's why you should choose us as your
                            trusted real estate partner:
                        </p>
                        <ul>
                            <li>
                                <strong>Experience and Expertise:</strong> With over 20 years in the industry, our team of
                                licensed professionals has extensive knowledge of the local real estate market, trends, and
                                regulations. We leverage this expertise to provide you with the best possible guidance and
                                results.
                            </li>
                            <li>
                                <strong>Personalized Approach:</strong> We understand that every client is unique, and we
                                take the time to listen and understand your specific requirements. Our tailored approach
                                ensures that we address your individual needs and deliver customized solutions.
                            </li>
                            <li>
                                <strong>Attention to Detail:</strong> We believe in meticulous attention to detail. From
                                property research and market analysis to contract negotiations and paperwork, we handle
                                every aspect of the real estate process with utmost care and precision.
                            </li>
                            <li>
                                <strong>Transparent Communication:</strong> We believe in open and transparent communication
                                throughout the entire process. We keep you informed at every step, provide regular updates,
                                and promptly address any questions or concerns you may have.
                            </li>
                            <li>
                                <strong>Exceptional Customer Service:</strong> Our dedication to customer satisfaction is
                                unmatched. We go above and beyond to ensure that your real estate experience with us is
                                smooth, stress-free, and exceeds your expectations.
                            </li>
                        </ul>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script lang="ts" setup>

</script>
  
<style scoped>
/* Add custom CSS styles here */
.whatwedoHeader {
    background-image: linear-gradient(90deg, rgba(254,254,254,0.5) 8%, rgba(255,255,255,0.5) 87%), url('@/assets/images/welcome.jpg');
    background-size: cover;
}
</style>
  