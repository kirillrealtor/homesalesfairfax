"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BurkeClient() {
  return (
    <main className="doc-page-root">
      <div className="doc-nav-wrapper">
        <Navbar />
      </div>

      <div className="doc-container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="doc-breadcrumb">
          <Link href="/" className="doc-breadcrumb-link">Home</Link>
          <span className="doc-breadcrumb-sep">/</span>
          <span className="doc-breadcrumb-curr">Burke, VA Real Estate &amp; Community Guide</span>
        </nav>

        {/* Encyclopedic Market Guide & Architectural Monograph */}
        <article className="doc-article-full">
          <h1 className="doc-h1">
            Burke, VA Real Estate: The Definitive Guide to Burke Centre Conservancy, Lake Braddock, VRE Commuter Rail &amp; Burke Lake Park
          </h1>

          {/* Editorial Meta Bar */}
          <div className="doc-meta-badge-bar">
            <span className="doc-meta-pill doc-meta-pill-accent">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              Evergreen Research Monograph
            </span>
            <span className="doc-meta-pill">Fairfax County, Virginia</span>
            <span className="doc-meta-pill">Postal ZIP Code 22015</span>
            <span className="doc-meta-pill">Braddock &amp; Springfield Districts</span>
            <span className="doc-meta-pill">Two VRE Commuter Rail Stations</span>
            <span className="doc-meta-pill">888-Acre Burke Lake Park</span>
            <span className="doc-meta-pill">Verified Public Records</span>
          </div>

          {/* Hero Banner Image */}
          <div className="doc-hero-wrap">
            <img
              src="/images/County/Burke.jpg"
              alt="Burke, Virginia - Peaceful tree-lined master-planned suburban community adjacent to Burke Lake Park and Burke Centre Conservancy"
              className="doc-hero-img"
              loading="eager"
            />
            <div className="doc-hero-caption">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Master-planned suburban living in Burke, Fairfax County, Virginia, featuring mature oak canopies, extensive pedestrian nature trails, dual VRE stations, and proximity to the 888-acre Burke Lake Park.
            </div>
          </div>

          {/* Section 1: Executive Summary & Foundational Takeaways */}
          <h2 id="executive-summary" className="doc-h2">
            1. Executive Summary &amp; Foundational Takeaways
          </h2>
          <p className="doc-p">
            Burke, Virginia, stands as the premier benchmark of master-planned suburban excellence, mature tree-canopied residential design, and commuter rail connectivity in central-southern Fairfax County. Encompassing postal ZIP code <strong>22015</strong> across the Braddock and Springfield Magisterial Districts, Burke is defined by two nationally recognized planned developments: the 1,700-acre <strong>Burke Centre Conservancy</strong> and the picturesque waterfront enclave of <strong>Lake Braddock</strong>.
          </p>
          <p className="doc-p">
            Governed as an unincorporated census-designated place (CDP) under the direct administrative authority of the Fairfax County Board of Supervisors, Burke is free of municipal town boundaries. Homeowners benefit from a single, unified county tax framework without secondary town real estate taxes, supported by premier public safety services, award-winning libraries, and world-class public education anchored by the <strong>Lake Braddock Secondary School</strong> and <strong>Robinson Secondary School</strong> pyramids.
          </p>
          <p className="doc-p">
            Historically originating as a mid-nineteenth-century depot along the Orange and Alexandria Railroad, Burke&apos;s modern trajectory was shaped by a celebrated 1950s civic victory that averted a proposed international airport, leading instead to the creation of the 888-acre <strong>Burke Lake Park</strong>. Bolstered by two dedicated <strong>Virginia Railway Express (VRE)</strong> commuter rail stations—Burke Centre and Rolling Road—along with direct access to the Fairfax County Parkway, Burke provides an exceptional balance of relaxed woodland living, recreational abundance, and direct rail access to Washington, D.C.
          </p>

          {/* Foundational Pillars Card */}
          <div className="doc-takeaways-card">
            <h3 className="doc-takeaways-title">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              The Six Structural Pillars of Burke Real Estate
            </h3>
            <ul className="doc-takeaways-list">
              <li className="doc-takeaways-item">
                <strong>Burke Centre Master Conservancy.</strong> A 1,700-acre Planned Residential Community (PRC) comprising 5,862 homes across five distinct enclaves, supported by five community centers, six swimming pools, 18 tennis/pickleball courts, and 30+ miles of paved paths.
              </li>
              <li className="doc-takeaways-item">
                <strong>Dual VRE Commuter Rail Stations.</strong> Direct heavy-rail transit into Alexandria, Crystal City, L&apos;Enfant Plaza, and Washington Union Station via the Burke Centre Station (featuring a multi-level parking garage and select Amtrak regional trains) and the Rolling Road Station.
              </li>
              <li className="doc-takeaways-item">
                <strong>Nationally Acclaimed Secondary School Pyramids.</strong> Home to Lake Braddock Secondary School and Robinson Secondary School, both offering comprehensive 7–12 campuses renowned for advanced academic placement, IB diplomas, and athletic championships.
              </li>
              <li className="doc-takeaways-item">
                <strong>888-Acre Burke Lake Park Anchor.</strong> A regional outdoor recreation paradise featuring a 218-acre public fishing lake, 4.7-mile shoreline loop trail, 18-hole par-3 golf course, driving range, disc golf, and miniature train.
              </li>
              <li className="doc-takeaways-item">
                <strong>Lake Braddock Waterfront Enclave.</strong> A 19-acre lake constructed in 1969 providing private catch-and-release fishing, kayaking, canoeing, and lakefront single-family and townhome living.
              </li>
              <li className="doc-takeaways-item">
                <strong>Arterial Highway Confluence.</strong> Immediate connectivity to Old Keene Mill Road (Route 644), Burke Centre Parkway, Roberts Parkway, Braddock Road, and the Fairfax County Parkway (Route 286).
              </li>
            </ul>
          </div>

          {/* Section 2: Comprehensive Historical Evolution */}
          <h2 id="historical-evolution" className="doc-h2">
            2. Comprehensive Historical Evolution
          </h2>
          <p className="doc-p">
            Burke&apos;s spatial and social development spans nineteenth-century railroad expansion, Civil War cavalry raids, a historic mid-twentieth-century federal land controversy, and pioneering master-planned suburban planning.
          </p>

          <h3 className="doc-h3">Silas Burke &amp; The Orange &amp; Alexandria Railroad (1840s–1860s)</h3>
          <p className="doc-p">
            In the early nineteenth century, the settlement took shape around the agricultural holdings of <strong>Silas Burke</strong> (1796–1854), an influential local farmer, merchant, county sheriff, and director of the Orange and Alexandria Railroad (O&amp;A RR). In 1824, Burke constructed the historic <strong>Silas Burke House</strong>, a grand brick and frame residence perched on a hill overlooking Pohick Creek.
          </p>
          <p className="doc-p">
            Burke donated critical right-of-way through his property for the construction of the railway, leading to the establishment of <strong>Burke&apos;s Station</strong> in the late 1840s. During the Civil War, the station served as a vital Union logistical and telegraph outpost. In December 1862, Confederate Major General J.E.B. Stuart launched a famous cavalry raid against Burke&apos;s Station. Stuart captured the federal telegraph depot and had his telegrapher tap the wires to transmit a brazen telegram directly to Union Quartermaster General Montgomery C. Meigs in Washington, complaining about the poor quality of captured federal mules.
          </p>

          <h3 className="doc-h3">The 1950s Burke Airport Battle &amp; Regional Transformation</h3>
          <p className="doc-p">
            In 1951, the Civil Aeronautics Administration (predecessor of the FAA) announced plans to condemn 4,500 contiguous acres in Burke to construct the second major international airport serving the National Capital Region. The federal government acquired and condemned hundreds of family farms. However, local residents organized the ferocious <strong>Burke Civic Association</strong>, mounting an eight-year legal and legislative campaign to protect their rural community from jet noise and industrial development.
          </p>
          <p className="doc-p">
            By 1958, civic resistance succeeded: the federal government abandoned the Burke airport proposal, selecting Chantilly instead (which became Washington Dulles International Airport). In 1960, the federal government transferred the condemned Burke acreage to Fairfax County. This historic land transfer created the 888-acre <strong>Burke Lake Park</strong> and paved the way for the master-planned development of <strong>Burke Centre</strong> in the 1970s.
          </p>

          {/* Section 3: The Burke Centre Planned Residential Community (PRC) */}
          <h2 id="burke-centre-conservancy" className="doc-h2">
            3. The Burke Centre Planned Residential Community (PRC)
          </h2>
          <p className="doc-p">
            Developed between 1976 and 1988 under Fairfax County&apos;s progressive <strong>Planned Residential Community (PRC)</strong> zoning ordinance, the <strong>Burke Centre Conservancy</strong> encompasses 1,700 acres and 5,862 homes. It remains one of the most celebrated master-planned communities in Virginia, designed to harmonize high-quality residential density with expansive natural greenbelts.
          </p>
          <p className="doc-p">
            Burke Centre is divided into five distinct sub-neighborhoods, each possessing its own unique architectural flavor, community center, swimming pool, and dedicated recreation facilities:
          </p>
          <ul className="doc-p" style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>The Commons:</strong> Positioned around the central village retail core and Burke Centre Library, featuring colonial-style townhomes, multi-level condominiums, and single-family homes with immediate walkability to shopping and dining.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>The Landings:</strong> Centered near Lake Barton, offering rolling topography, lakefront townhomes, and spacious single-family residences beneath mature hardwoods.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>The Oaks:</strong> A serene enclave of predominantly detached single-family residences nestled under towering white oaks, red oaks, and beech trees.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>The Ponds:</strong> A picturesque neighborhood framed by landscaped retention waterways, open common greens, and peaceful residential cul-de-sacs.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>The Woods:</strong> The most heavily forested of the five neighborhoods, featuring low-density single-family homes woven seamlessly into protected forest conservation buffers.
            </li>
          </ul>

          {/* Section 4: Lake Braddock Master Community */}
          <h2 id="lake-braddock" className="doc-h2">
            4. Lake Braddock Master Community
          </h2>
          <p className="doc-p">
            To the east of Burke Centre lies <strong>Lake Braddock</strong>, a master-planned residential community centered around an eponymous 19-acre freshwater lake. Constructed in 1969 as part of the Pohick Creek flood mitigation project, the lake serves as the aesthetic centerpiece for more than 1,200 single-family residences and townhomes.
          </p>
          <p className="doc-p">
            Lake Braddock residents enjoy private access to a community center, swimming pool, tennis and pickleball courts, and scenic lakefront walking paths. Non-motorized watercraft—including canoes, kayaks, and rowboats—are permitted on the lake, alongside catch-and-release fishing for largemouth bass, bluegill, and crappie. The community is intimately integrated with the adjoining Lake Braddock Secondary School campus.
          </p>

          {/* Section 5: Housing Stock Typologies & Architectural Stratification */}
          <h2 id="housing-typologies" className="doc-h2">
            5. Housing Stock Typologies &amp; Architectural Stratification
          </h2>
          <p className="doc-p">
            Constructed primarily between 1970 and 1995, Burke&apos;s residential architecture exemplifies the golden era of Northern Virginia suburban craftsmanship:
          </p>

          <h3 className="doc-h3">1. Classic Two-Story Brick &amp; Siding Colonials</h3>
          <p className="doc-p">
            The prevailing single-family typology throughout Burke Centre, Signal Hill, Cherry Run, and Rolling Valley: solid two-story colonial revivals featuring brick and beadboard facades, side-entry or front-load two-car garages, four to five upper-level bedrooms, formal living and dining rooms, and fully finished lower-level walkouts opening onto generous quarter- to third-acre maturely landscaped parcels.
          </p>

          <h3 className="doc-h3">2. Multi-Level Split-Level &amp; Split-Foyer Homes</h3>
          <p className="doc-p">
            Developed in neighborhoods like Burke Station Square and early sections of Rolling Valley, these homes feature efficient multi-level floor plans, large rear sundecks, mature tree canopies, and private yards on fee-simple non-HOA parcels.
          </p>

          <h3 className="doc-h3">3. Fee-Simple Townhomes with Private Courtyards</h3>
          <p className="doc-p">
            Multi-story brick and wood-sided townhomes in Burke Centre and Lake Braddock offer 1,500 to 2,400 square feet of finished living space across three levels. Features include walkout lower levels opening into private fenced rear garden patios, updated eat-in kitchens, and assigned or garage parking.
          </p>

          <h3 className="doc-h3">4. Custom Infill &amp; Waterfront Residences</h3>
          <p className="doc-p">
            Select lakefront properties bordering Lake Braddock and Lake Barton, along with custom infill homes constructed on peripheral parcels, provide expansive square footage, vaulted ceilings, and panoramic water vistas.
          </p>

          {/* Section 6: Multimodal Transportation & Commuter Arteries */}
          <h2 id="transportation-infrastructure" className="doc-h2">
            6. Multimodal Transportation &amp; Commuter Arteries
          </h2>
          <p className="doc-p">
            Burke provides one of the most comprehensive and commuter-friendly transit frameworks in Fairfax County:
          </p>

          <h3 className="doc-h3">Virginia Railway Express (VRE) Commuter Rail</h3>
          <p className="doc-p">
            Burke is served by two major stations on the VRE Manassas Line:
          </p>
          <ul className="doc-p" style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Burke Centre VRE Station:</strong> A premier regional transit hub situated on Roberts Parkway. It features a multi-deck 1,500-space commuter parking garage, covered pedestrian bridges, bicycle lockers, and a dedicated bus transit loop. The station provides direct heavy-rail service into Alexandria, Crystal City, L&apos;Enfant Plaza, and Washington Union Station, and is also served by select daily <strong>Amtrak Northeast Regional</strong> trains.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Rolling Road VRE Station:</strong> Located on the eastern edge of Burke near Old Keene Mill Road, providing rapid commuter rail boarding for eastern residential subdivisions.
            </li>
          </ul>

          <h3 className="doc-h3">Arterial Highway Network</h3>
          <p className="doc-p">
            Burke is traversed by high-capacity regional roads, including <strong>Old Keene Mill Road (Route 644)</strong> providing a straight drive east to Interstate 95 and Springfield, <strong>Fairfax County Parkway (Route 286)</strong> providing direct access north to I-66, Reston, and Herndon, and <strong>Braddock Road (Route 620)</strong> connecting to George Mason University and the Capital Beltway (I-495).
          </p>

          {/* Section 7: Public Education & Academic Pyramids */}
          <h2 id="public-education" className="doc-h2">
            7. Public Education &amp; Academic Pyramids
          </h2>
          <p className="doc-p">
            Public education in Burke is administered by <strong>Fairfax County Public Schools (FCPS)</strong>, renowned nationally for its secondary educational pyramids:
          </p>

          <h3 className="doc-h3">Lake Braddock Secondary School Pyramid</h3>
          <p className="doc-p">
            <strong>Lake Braddock Secondary School</strong> is a comprehensive grades 7–12 institution serving the majority of Burke. Consistently ranked among the top secondary schools in Virginia, Lake Braddock offers extensive Advanced Placement (AP) course offerings, the AP Capstone diploma, nationally recognized marching band and orchestra programs, and state-championship varsity athletic teams. Feeder elementary schools include <strong>Terra Centre Elementary</strong>, <strong>Fairview Elementary</strong>, and <strong>Cherry Run Elementary</strong>.
          </p>

          <h3 className="doc-h3">Robinson Secondary School Pyramid</h3>
          <p className="doc-p">
            Bordering sectors of northern and western Burke feed into <strong>Robinson Secondary School</strong>, another premier grades 7–12 campus. Robinson is an authorized <strong>International Baccalaureate (IB) World School</strong>, granting the rigorous IB Diploma Programme alongside competitive STEM and fine arts curricula. Feeder schools include <strong>White Oaks Elementary</strong>, <strong>Kings Park Elementary</strong>, and <strong>Kings Glen Elementary</strong>.
          </p>

          {/* Section 8: Parks, Lakes & Environmental Stewardship */}
          <h2 id="parks-recreation" className="doc-h2">
            8. Parks, Lakes &amp; Environmental Stewardship
          </h2>
          <p className="doc-p">
            Burke provides exceptional access to municipal parkland and natural freshwater ecosystems:
          </p>
          <ul className="doc-p" style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Burke Lake Park:</strong> Spanning 888 acres, this crown jewel of the Fairfax County Park Authority features a 218-acre freshwater lake, a 4.7-mile shaded shoreline loop trail, an 18-hole par-3 golf course with a lighted driving range, public boat launch and electric motor rentals, fishing piers, miniature steam train, 18-hole disc golf course, and camping grounds.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Lake Barton:</strong> A serene 8-acre neighborhood lake located in Burke Centre, surrounded by walking paths, wildlife observation platforms, and community parkland.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Pohick Stream Valley Trail:</strong> A network of paved nature trails running through forested corridors along Pohick Creek, connecting Burke neighborhoods to regional parks.
            </li>
          </ul>

          {/* Section 9: Zoning, Land-Use Governance & Planned Communities */}
          <h2 id="zoning-governance" className="doc-h2">
            9. Zoning, Land-Use Governance &amp; Planned Communities
          </h2>
          <p className="doc-p">
            Land use across Burke is administered under the Fairfax County Zoning Ordinance (<strong>zMOD</strong>):
          </p>

          <h3 className="doc-h3">Planned Residential Community (PRC) Zoning</h3>
          <p className="doc-p">
            Burke Centre is governed by the <strong>PRC zoning district</strong>, an advanced master-planning mechanism that establishes binding density limitations, comprehensive open-space set-asides, architectural covenants, and mandatory trail connections. This zoning prevents piecemeal commercial redevelopment and protects neighborhood integrity.
          </p>

          <h3 className="doc-h3">Standard Suburban Residential Classifications</h3>
          <p className="doc-p">
            Neighborhoods outside Burke Centre are zoned predominantly <strong>R-2, R-3, and R-4 (Residential 2 to 4 units per acre)</strong>. These districts establish minimum lot sizes from 8,400 to 15,000 square feet, enforcing traditional front- and side-yard setbacks and preserving tree canopy standards.
          </p>

          {/* Section 10: Environmental Regulation: Chesapeake Bay Act & Watersheds */}
          <h2 id="environmental-regulation" className="doc-h2">
            10. Environmental Regulation: Chesapeake Bay Act &amp; Watersheds
          </h2>
          <p className="doc-p">
            Burke lies within the Pohick Creek watershed, a vital tributary of the tidal Potomac River. Under the <strong>Chesapeake Bay Preservation Act</strong>, statutory 100-foot <strong>Resource Protection Areas (RPAs)</strong> border all perennial streams, wetlands, and lakeshores.
          </p>
          <p className="doc-p">
            Within these RPA zones, development and tree clearing are tightly restricted to preserve indigenous vegetative buffers, absorb stormwater runoff, and prevent sedimentation in Lake Braddock, Lake Barton, and Burke Lake. Modern regional detention ponds and bioretention swales are maintained throughout planned communities to manage water quality.
          </p>

          {/* Section 11: Commercial & Retail Infrastructure */}
          <h2 id="commercial-infrastructure" className="doc-h2">
            11. Commercial &amp; Retail Infrastructure
          </h2>
          <p className="doc-p">
            Burke offers convenient neighborhood retail centers that serve daily community needs:
          </p>
          <ul className="doc-p" style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Burke Centre Shopping Center:</strong> Anchored by major supermarkets, pharmacies, banks, medical clinics, and a variety of casual dining and local coffee shops.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Burke Town Plaza &amp; Rolling Valley Mall:</strong> Commercial nodes offering specialty retailers, fitness studios, home improvement centers, and commuter bus park-and-ride facilities.
            </li>
            <li style={{ marginBottom: "0.75rem" }}>
              <strong>Burke Centre Library:</strong> A modern 18,000-square-foot branch of the Fairfax County Public Library system featuring advanced digital learning spaces, meeting rooms, and children&apos;s literacy programming.
            </li>
          </ul>

          {/* Section 12: Comprehensive Submarket Matrix Table */}
          <h2 id="submarket-matrix" className="doc-h2">
            12. Comprehensive Submarket Matrix Table
          </h2>
          <p className="doc-p">
            The table below contrasts the primary residential submarkets across Burke, evaluating architectural styles, density profiles, transit access, and governance models:
          </p>

          <div className="doc-table-wrapper">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Submarket / Sector</th>
                  <th>Primary Architectural Typology</th>
                  <th>Dominant Construction Era</th>
                  <th>Density &amp; Lot Size Profile</th>
                  <th>Transit &amp; Commuter Profile</th>
                  <th>Governance &amp; HOA Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Burke Centre (5 Enclaves)</strong></td>
                  <td>Colonials, Split-Levels, Townhomes, Condos</td>
                  <td>1976 – 1988</td>
                  <td>Master PRC; 0.20 to 0.35 Acres &amp; Townhome Clusters</td>
                  <td>Direct Burke Centre VRE Station Access; Paved Trails</td>
                  <td>Mandatory Burke Centre Conservancy (POAA); 5 Centers, 6 Pools</td>
                </tr>
                <tr>
                  <td><strong>Lake Braddock Community</strong></td>
                  <td>Lakefront Colonials, Multi-Level Townhomes</td>
                  <td>1969 – 1980</td>
                  <td>Medium Density; Lakefront &amp; Clustered Sites</td>
                  <td>Burke Lake Rd &amp; Old Keene Mill Rd; Rolling Rd VRE</td>
                  <td>Mandatory Lake Braddock Community Association; Pool, Docks</td>
                </tr>
                <tr>
                  <td><strong>Rolling Valley &amp; Signal Hill</strong></td>
                  <td>Traditional 2-Story Brick Colonials, Split-Levels</td>
                  <td>1970 – 1985</td>
                  <td>Medium-Low Density; 0.25 to 0.40 Acres</td>
                  <td>Old Keene Mill Rd Express Bus &amp; Rolling Rd VRE</td>
                  <td>Predominantly Non-HOA Fee-Simple Ownership</td>
                </tr>
                <tr>
                  <td><strong>Cherry Run &amp; Burke Station Sq.</strong></td>
                  <td>Split-Levels, Split-Foyers, Colonials</td>
                  <td>1972 – 1985</td>
                  <td>Medium Density; 0.22 to 0.35 Acres</td>
                  <td>Burke Road &amp; Burke Lake Road Access</td>
                  <td>Voluntary Civic Associations / Fee-Simple Non-HOA</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 13: Taxation & Civic Governance */}
          <h2 id="taxation-governance" className="doc-h2">
            13. Taxation &amp; Civic Governance
          </h2>
          <p className="doc-p">
            As an unincorporated community governed directly by Fairfax County, Burke provides a unified, predictable tax and administrative framework:
          </p>

          <h3 className="doc-h3">Ad Valorem Real Estate Assessments</h3>
          <p className="doc-p">
            Real estate in Burke is assessed annually at 100% fair market value by the <strong>Fairfax County Department of Tax Administration (DTA)</strong> in strict accordance with <strong>Virginia Code Title 58.1</strong>. Taxes are billed semi-annually. Because Burke is not an incorporated town, property owners pay only the single unified county real estate tax and standard countywide service assessments, avoiding secondary municipal town taxes.
          </p>

          <h3 className="doc-h3">Master Associations vs. Non-HOA Subdivisions</h3>
          <p className="doc-p">
            Homeowners within the Burke Centre Conservancy and Lake Braddock Community Association operate under the statutory governance of the <strong>Virginia Property Owners&apos; Association Act (POAA)</strong>. Mandatory association dues fund extensive capital reserves, professional management, six swimming pools, five community centers, tennis/pickleball courts, and miles of common trails. Conversely, older subdivisions such as Rolling Valley and Cherry Run operate primarily as fee-simple properties with no mandatory HOA dues, affording owners full autonomy within county zoning rules.
          </p>

          {/* Section 14: 10 Comprehensive Evergreen FAQs */}
          <h2 id="faqs" className="doc-h2">
            14. 10 Comprehensive Evergreen FAQs
          </h2>

          <h3 className="doc-h3">1. Is Burke an incorporated town or an unincorporated area of Fairfax County?</h3>
          <p className="doc-p">
            Burke is an unincorporated census-designated place (CDP) situated in the Braddock and Springfield Magisterial Districts of Fairfax County. It possesses no separate town mayor, town council, or municipal town tax. All public services, public safety, schooling, and property tax administration are managed directly by Fairfax County government, meaning residents pay solely unified county real estate taxes.
          </p>

          <h3 className="doc-h3">2. What is the Burke Centre Conservancy and how is it structured?</h3>
          <p className="doc-p">
            The Burke Centre Conservancy is an acclaimed 1,700-acre master-planned residential community established between 1976 and 1988 under Planned Residential Community (PRC) zoning. It comprises 5,862 residences divided into five distinct enclaves: The Commons, The Landings, The Oaks, The Ponds, and The Woods. The Conservancy operates five community centers, six swimming pools, 18 tennis and pickleball courts, and over 30 miles of interconnected paved nature paths.
          </p>

          <h3 className="doc-h3">3. What commuter rail transit options serve Burke?</h3>
          <p className="doc-p">
            Burke is served by two dedicated Virginia Railway Express (VRE) stations on the Manassas Line: the Burke Centre Station (which features a multi-level commuter parking garage and also accommodates select Amtrak regional trains) and the Rolling Road Station. The VRE provides direct, seated train transit to Alexandria, Crystal City, L&apos;Enfant Plaza, and Washington Union Station.
          </p>

          <h3 className="doc-h3">4. Which public schools serve the Burke community?</h3>
          <p className="doc-p">
            Burke is served by Fairfax County Public Schools (FCPS) across two highly ranked secondary school pyramids: the Lake Braddock Secondary School pyramid (grades 7-12, renowned for advanced academic programs, varsity athletics, and fine arts) and the Robinson Secondary School pyramid (grades 7-12, offering the prestigious International Baccalaureate / IB Diploma Programme).
          </p>

          <h3 className="doc-h3">5. What is the history behind Burke Lake Park and the 1950s airport controversy?</h3>
          <p className="doc-p">
            In the early 1950s, the federal government condemned 4,500 acres in Burke to construct the second major international airport for the Washington region. Intense civic opposition from local residents successfully blocked the project, forcing the federal government to relocate the airport site to Chantilly (which became Dulles International Airport). The federal government subsequently transferred the condemned Burke acreage to Fairfax County, establishing the 888-acre Burke Lake Park and providing land for the Burke Centre master plan.
          </p>

          <h3 className="doc-h3">6. What architectural home styles are found in Burke?</h3>
          <p className="doc-p">
            Burke offers diverse architectural typologies built predominantly from the 1970s through the 1990s: classic two-story brick and siding colonial revivals, split-levels, split-foyers, contemporary cedar-accented single-family homes, and multi-level fee-simple townhomes with private fenced rear gardens and assigned or garage parking.
          </p>

          <h3 className="doc-h3">7. What is the Lake Braddock community and lake ecosystem?</h3>
          <p className="doc-p">
            Lake Braddock is an established residential enclave centered around a 19-acre man-made lake constructed in 1969 as part of the Pohick Creek watershed flood mitigation system. The neighborhood features lakefront single-family homes, clusters of townhomes, a community center, swimming pool, and private docks for non-motorized canoeing, kayaking, and catch-and-release fishing.
          </p>

          <h3 className="doc-h3">8. What recreational facilities does Burke Lake Park offer?</h3>
          <p className="doc-p">
            Burke Lake Park is an 888-acre flagship regional park managed by the Fairfax County Park Authority. It features a 218-acre public fishing lake, a 4.7-mile scenic shoreline loop trail, an 18-hole par-3 golf course, driving range, public boat launch and electric motor boat rentals, a miniature steam train, antique carousel, 18-hole disc golf course, and camping sites.
          </p>

          <h3 className="doc-h3">9. What major highways provide access to Burke?</h3>
          <p className="doc-p">
            Burke is connected by major arterial roads including Old Keene Mill Road (Route 644), Burke Centre Parkway, Roberts Parkway, Burke Lake Road, Braddock Road (Route 620), and the Fairfax County Parkway (Route 286), offering rapid routes to Interstate 95, Interstate 66, and the Capital Beltway (I-495).
          </p>

          <h3 className="doc-h3">10. Do homes in Burke have mandatory HOA dues?</h3>
          <p className="doc-p">
            Residences within planned communities like Burke Centre and Lake Braddock are subject to mandatory community associations governed by the Virginia Property Owners&apos; Association Act (POAA), which fund extensive amenities including pools, community centers, tennis/pickleball courts, and trail maintenance. Older non-conservancy subdivisions in Burke operate as fee-simple properties with no mandatory HOA dues.
          </p>

          {/* Section 15: Legal & Fair Housing Disclaimer */}
          <h2 id="disclaimer" className="doc-h2">
            15. Legal &amp; Fair Housing Disclaimer
          </h2>
          <p className="doc-p" style={{ fontSize: "1.05rem", color: "#6B7280", lineHeight: 1.75 }}>
            This real estate and community monograph is published strictly for informational, educational, and demographic research purposes. All municipal boundaries, zoning districts, school attendance zones, tax assessments, and transit schedules are derived from official Fairfax County public records, the Virginia Railway Express (VRE), the Virginia Department of Transportation (VDOT), and the Code of Virginia, and are subject to periodic administrative modification. Prospective purchasers, sellers, and investors must independently examine official property disclosures, deed encumbrances, and association bylaws through licensed legal and real estate professionals prior to executing contractual agreements. This publication strictly adheres to Title VIII of the Civil Rights Act of 1968 (The Federal Fair Housing Act) and the Virginia Fair Housing Law, prohibiting discrimination on the basis of race, color, religion, sex, handicap, familial status, elderliness, or national origin.
          </p>
        </article>
      </div>

      <Footer />
    </main>
  );
}
